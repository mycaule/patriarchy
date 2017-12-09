const patriarchy = (obj, prefix = '') => {
  const isReadable = o => (typeof o === 'string' || typeof o === 'number')
  const isParsable = o => (typeof o === 'object' && o !== null)

  const partition = o => Object.keys(o)
    .map(key => o[key])
    .reduce((acc, o) => {
      acc[isReadable(o) ? 0 : 1].push(o)
      return acc
    }, [[], []])

  const [lines, nodes] = partition(obj)

  const splitter = '\n' + prefix + (nodes.length ? '│' : ' ') + ' '

  // Not readable objects are printed out later on recursively
  return prefix +
    lines.join(splitter) + '\n' +
    nodes
      .filter(isParsable)
      .map((node, ix) => {
        const last = ix === nodes.length - 1
        const nnodes = partition(obj)[1]
        const more = nnodes && nnodes.length
        const prefix_ = prefix + (last ? ' ' : '│') + ' '

        return prefix +
          (last ? '└' : '├') + '─' +
          (more ? '┬' : '─') + ' ' +
          patriarchy(node, prefix_).slice(prefix.length + 2)
      })
      .join('')
}

module.exports = patriarchy
