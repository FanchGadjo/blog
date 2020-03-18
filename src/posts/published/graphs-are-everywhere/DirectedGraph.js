import React from 'react'
import { useTheme } from 'emotion-theming'
import { COLORS, FONTS } from '../../../constants'
import { bs } from '../../../shevy'

// The absurd width is partnered with negative margins to create an svg that almost
// is guaranteed to take up the full width on any gargantuan sized screen. It also
// has the benefit of making the graph stay in the center of the svg, which is
// what I wanted in the first place.
const WIDTH = 5000
const HEIGHT = 320
const NODE_RADIUS = 15
const ARROW_SIZE = 6

const initialData = {
  nodes: [],
  links: []
}

const defaultOptions = {
  chargeStrength: -50,
  linkDistance: 100,
  linkStrength: 2
}

export default function DirectedGraph({
  caption,
  data = initialData,
  showNodeIDs = false,
  options = {}
}) {
  options = { ...defaultOptions, ...options }
  const svgRef = React.useRef(null)
  const isReady = useScript({
    url: 'https://cdnjs.cloudflare.com/ajax/libs/d3/5.11.0/d3.min.js'
  })
  const theme = useTheme()

  React.useEffect(() => {
    if (!isReady) {
      return
    }

    const { d3 } = window

    const svg = d3
      .select(svgRef.current)
      .attr('width', WIDTH)
      .attr('height', HEIGHT)
      .attr(
        'style',
        `margin-left: -${WIDTH / 2}px; margin-right: -${WIDTH / 2}px`
      )

    // This defines the arrow at the end of lines
    svg
      .append('defs')
      .append('marker')
      .attr('id', 'arrowhead')
      .attr('viewBox', '0 -5 10 5')
      .attr('refX', NODE_RADIUS + ARROW_SIZE)
      .attr('refY', 0)
      .attr('orient', 'auto')
      .attr('markerWidth', ARROW_SIZE)
      .attr('markerHeight', ARROW_SIZE)
      .attr('overflow', 'visible')
      .append('svg:path')
      .attr('d', 'M 0,-5 10,0 0,5Z')
      .attr('fill', theme.colors.text)
      .attr('stroke', 'none')

    const simulation = d3.forceSimulation(data.nodes)
    const linkForce = d3
      .forceLink(data.links)
      .id(d => d.id)
      .distance(options.linkDistance)
      .strength(options.linkStrength)

    simulation
      .force('charge', d3.forceManyBody().strength(options.chargeStrength))
      .force('center', d3.forceCenter(WIDTH / 2, HEIGHT / 2))
      .force('links', linkForce)

    const link = svg
      .append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(data.links)
      .enter()
      .append('line')
      .attr('stroke-width', 2)
      .attr('stroke', theme.colors.text)
      .attr('marker-end', 'url(#arrowhead)')

    const node = svg
      .append('g')
      .attr('class', 'nodes')
      .selectAll('.node')
      .data(data.nodes)
      .enter()
      .append('g')
      .attr('class', 'node')
      .call(
        d3
          .drag()
          .on('start', handleDragStart)
          .on('drag', handleDrag)
      )

    node
      .append('circle')
      .attr('r', NODE_RADIUS)
      .attr('fill', theme.colors.background)
      .attr('stroke-width', 1)
      .attr('stroke', theme.colors.text)

    if (showNodeIDs) {
      node
        .append('text')
        .attr('dx', -NODE_RADIUS / 4)
        .attr('dy', NODE_RADIUS / 4)
        .text(d => d.id)
    }

    function tickActions() {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y)

      node.attr('transform', nodeTransform)
    }

    function nodeTransform(d) {
      return `translate(${d.x}, ${d.y})`
    }

    function handleDragStart(d) {
      if (!d3.event.active) {
        simulation.alphaTarget(0.3).restart()
      }

      d.fx = d.x
      d.fy = d.y
    }

    function handleDrag(d) {
      d.fx = d3.event.x
      d.fy = d3.event.y
    }

    simulation.on('tick', tickActions)
  }, [data, isReady])

  React.useEffect(() => {
    if (!isReady) {
      return
    }

    const { d3 } = window
    const svg = d3.select(svgRef.current)

    const arrowHeadPath = svg.select('#arrowhead').select('path')
    arrowHeadPath.attr('fill', theme.colors.text)

    const links = svg.select('.links')
    links.selectAll('line').attr('stroke', theme.colors.text)

    const node = svg.selectAll('.node')
    node
      .select('circle')
      .attr('fill', theme.colors.background)
      .attr('stroke', theme.colors.text)
  }, [theme])

  return (
    <div css={{ marginBottom: bs(2) }}>
      <div
        css={{
          border: `2px dashed ${theme.colors.accent}`,
          ...(caption ? { borderBottom: 'none' } : {}),
          display: 'flex',
          justifyContent: 'center',
          overflow: 'hidden'
        }}
      >
        <svg ref={svgRef} />
      </div>
      {caption ? (
        <div
          css={{
            backgroundColor: theme.colors.offset,
            fontFamily: theme.fonts.catamaran,
            fontStyle: 'italic',
            padding: `${bs(0.5)} ${bs()}`,
            textAlign: 'center'
          }}
        >
          {caption}
        </div>
      ) : null}
    </div>
  )
}

const scriptCache = {}

const noop = () => {}

// TODO: this is really imperfect. It'll just keep adding the same script tag even
// if it's already on the page. That said, it reads it from browser cache so it's not a big deal.
//
// The challenge is we can't just see if it's on the page. The script can be on the page, and
// and still have not loaded yet. IMO we'd need to use observables in some way. A script orchestrator
// would store any urls being added and delegate when a particular script url is loaded that all
// subscribers can now switch to an isReady state.
function useScript({ onCreate = noop, onError = noop, onLoad = noop, url }) {
  const [isReady, setIsReady] = React.useState(false)

  React.useEffect(() => {
    if (scriptCache[url] === 'LOADED') {
      setIsReady(true)
      return
    }

    const script = document.createElement('script')
    onCreate()

    script.src = url
    script.async = true

    script.onerror = err => {
      onError(err)
    }

    script.onload = () => {
      scriptCache[url] = 'LOADED'
      setIsReady(true)
      onLoad()
    }

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [onCreate, onError, onLoad, url])

  return isReady
}
