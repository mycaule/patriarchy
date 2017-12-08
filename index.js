const patriarchy = (obj, prefix = '') => {
  const isReadable = o => (typeof o === 'string' || typeof o === 'number')
  const isParsable = o => (typeof o === 'object' && o !== null)

  // Partitioning the objects between readable and not readable
  const [lines, nodes] = Object.keys(obj)
    .map(key => obj[key])
    .reduce((acc, obj) => {
      acc[isReadable(obj) ? 0 : 1].push(obj)
      return acc
    }, [[], []])

  const splitter = '\n' + prefix + (nodes.length ? '│' : ' ') + ' '

  // Not readable objects are printed out later on recursively
  return prefix +
    lines.join(splitter) + '\n' +
    nodes
      .filter(isParsable)
      .map((node, ix) => {
        const last = ix === nodes.length - 1
        const more = node.nodes && node.nodes.length
        const prefix_ = prefix + (last ? ' ' : '│') + ' '

        return prefix +
          (last ? '└' : '├') + '─' +
          (more ? '┬' : '─') + ' ' +
          patriarchy(node, prefix_).slice(prefix.length + 2)
      })
      .join('')
}

module.exports = patriarchy
