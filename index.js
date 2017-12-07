const patriarchy = (obj, prefix = '') => {
  const objs = Object.keys(obj).map(key => obj[key])
  const lines = objs.filter(o => (typeof o === 'string'))
  const nodes = objs.filter(o => !(typeof o === 'string'))

  const splitter = '\n' + prefix + (nodes.length ? '│' : ' ') + ' '

  return prefix +
    lines.join(splitter) + '\n' +
    nodes.map((node, ix) => {
      const last = ix === nodes.length - 1
      const more = node.nodes && node.nodes.length
      const prefix_ = prefix + (last ? ' ' : '│') + ' '

      return prefix +
        (last ? '└' : '├') + '─' +
        (more ? '┬' : '─') + ' ' +
        patriarchy(node, prefix_).slice(prefix.length + 2)
    }).join('')
}

module.exports = patriarchy
