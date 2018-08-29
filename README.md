# parawidget

> paradex widgets

[![NPM](https://img.shields.io/npm/v/parawidget.svg)](https://www.npmjs.com/package/parawidget) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save parawidget
```

## Usage

```tsx
import widgets from 'parawidget';

class Example extends React.Component {
  render () {
    const marketChart = widgets.marketChart.new();
    
    return (
      <div>
        {marketChart.render({text: 'hello world'})}
      </div>
    )
  }
}
```

## Author

[marczenn](https://github.com/marczenn)
