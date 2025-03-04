// const heading = React.createElement('h1', {}, "Hello world from React")


const parent = React.createElement('div', { id: 'parent' }, React.createElement('div', { id: 'child1' }, React.createElement('h1', { id: 'heading' }, 'Heading')))
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent)