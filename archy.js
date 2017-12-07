const archy = (obj, prefix = '') => {
  if (typeof obj === 'string') {
    obj = {label: obj}
  }

  const nodes = obj.nodes || []
  const lines = (obj.label || '').split('\n')
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
        archy(node, prefix_).slice(prefix.length + 2)
    }).join('')
}

const s1 = archy({
  label: 'beep',
  nodes: [
    'ity',
    {
      label: 'boop',
      nodes: [
        {
          label: 'o_O',
          nodes: [
            {
              label: 'oh',
              nodes: ['hello', 'puny']
            },
            'human'
          ]
        },
        'party\ntime!'
      ]
    }
  ]
})

console.log(s1)
