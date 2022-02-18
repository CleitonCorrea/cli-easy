import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'cli-dev-backend',
  run: async (toolbox) => {
    const { print } = toolbox

    print.info('Welcome to your CLI Dev Backend')
  },
}

module.exports = command
