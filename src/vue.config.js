module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                //默认配置： 'src': '@'
                'assets': '@/assets',
                'components': '@/components',
                'network': '@/network'
            }
        }
    }
}