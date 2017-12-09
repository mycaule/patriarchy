const patriarchy = (obj, prefix = '') => {
  const isReadable = o => ((typeof o === 'string' && o !== '') || typeof o === 'number')
  const isObject = o => (typeof o === 'object' && o !== null)

  const partition = o => Object.keys(o)
    .map(key => o[key])
    .reduce((acc, o) => {
      acc[isReadable(o) ? 0 : isObject(o) ? 1 : 2].push(o)
      return acc
    }, [[], [], []])

  const [lines, nodes] = partition(obj)
  const splitter = '\n' + prefix + '│ '

  // Not readable objects are printed out later on recursively
  return prefix +
    lines.join(splitter) + '\n' +
    nodes
      .map((node, ix) => {
        const last = ix === nodes.length - 1
        const [, more] = partition(obj).map(x => x.length > 0)
        const prefix_ = prefix + (last ? ' ' : '│') + ' '

        return prefix +
          (last ? '└' : '├') + '─' +
          (more ? '┐' : '─') + ' ' +
          patriarchy(node, prefix_).slice(prefix.length + 2)
      })
      .join('')
}

module.exports = patriarchy
