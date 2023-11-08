const path = require('path');
const fs = require('fs');

function getExampleFilename(componentPath) {
  return componentPath.replace(/src(\\|\/)[A-Z].*(\\|\/)/, path.join('src', '__docs__/')).replace(/\.jsx?$/, '.md');
}

function getComponentPathLine(componentPath) {
  const name = path.basename(componentPath, '.jsx');
  const dir = path.dirname(componentPath).split(path.sep)[1];
  return `import ${name} from '@levitovchess/components/lib/${dir}${dir !== name ? `/${name}` : ''}';`;
}

function updateExample(props, exampleFilePath) {
  const { settings, lang } = props;
  if (settings && typeof settings.file === 'string') {
    const filepath = path.resolve(path.dirname(exampleFilePath), settings.file);
    settings.static = true;
    delete settings.file;
    return {
      content: fs.readFileSync(filepath, 'utf8'),
      settings,
      lang,
    };
  }
  return props;
}

module.exports = {
  styleguideDir: 'build',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/__docs__/_Wrapper.jsx')
  },
  require: [path.join(__dirname, 'src/_themes/style.css'), path.join(__dirname, 'src/__docs__/_style.css')],
  pagePerSection: true,
  usageMode: 'expand',
  exampleMode: 'collapse',
  sortProps: props => props,
  getExampleFilename,
  getComponentPathLine,
  updateExample,
  ignore: ['src/**/__tests__/**', 'src/**/__examples__/**', 'src/**/_internal/**'],
  sections: [
    {
      name: 'Типографика',
      content: 'src/__docs__/_typography.md',
      components: 'src/Typography/**/[A-Z]*.jsx',
      ignore: 'src/Typography/Typography.jsx',
      sectionDepth: 1,
    },
    {
      name: 'Формы',
      content: 'src/__docs__/_forms.md',
      components: ['src/Form/[A-Z]*.jsx', 'src/Button/[A-Z]*.jsx', 'src/Input/[A-Z]*.jsx'],
      sectionDepth: 1,
    },
    {
      name: 'Другие компоненты',
      content: 'src/__docs__/_components.md',
      components: 'src/**/[A-Z]*.jsx',
      ignore: [
        'src/Typography/**',
        'src/Form/**',
        'src/Button/**',
        'src/Input/**',
        'src/Icon/**',
        'src/IconChess/**',
        'src/SimpleBoard/Chessboard/**',
        'src/SimpleScroll/**',
      ],
      sectionDepth: 1,
    },
    {
      name: 'Иконки',
      content: 'src/__docs__/_icons.md',
      components: 'src/Icon/[A-Z]*.jsx',
      ignore: ['src/Icon/Icon.jsx'],
      sectionDepth: 1,
    },
    {
      name: 'Шахматные фигуры',
      content: 'src/__docs__/_iconsChess.md',
      components: 'src/IconChess/**/[A-Z]*.jsx',
      ignore: ['src/IconChess/Icon.jsx'],
      sectionDepth: 1,
    },
  ],
};
