```jsx
const FilesUploaderExample = require('../__examples__/FilesUploader.example').default;

<div className="omay-ds-block">
  <div className="omay-ds-block">
    <FilesUploaderExample id="FilesUploaderExample1" title="Заявление заемщика" note="На двух листах" />
  </div>
</div>
```

```jsx
const FilesUploaderExample = require('../__examples__/FilesUploader.example').default;

<div className="omay-ds-block">
  <div className="omay-ds-block">
    <FilesUploaderExample
      id="FilesUploaderExample2"
      title="Заявление на аннулирование"
      maxFilesQty={3}
    />
  </div>
</div>
```

```jsx
const FilesUploaderExample = require('../__examples__/FilesUploader.example').default;

<div className="omay-ds-block">
  <div className="omay-ds-block">
    <FilesUploaderExample
      id="FilesUploaderExample2"
      title="Заявление на аннулирование"
      maxFilesQty={3}
      maxFilesTotalSize={1000}
      maxFileSize={1000}
    />
  </div>
</div>
```

```jsx
const FilesUploaderExample = require('../__examples__/FilesUploader.example').default;

const files = [
  { id: '1', name: 'file1.txt' },
  { id: '2', name: 'file1.txt' },
];

<div className="omay-ds-block">
  <div className="omay-ds-block">
    <FilesUploaderExample
      id="FilesUploaderExample2"
      title="Заявление на аннулирование"
      files={files}
      maxFilesQty={3}
      maxFilesTotalSize={1000}
      maxFileSize={1000}
      disabled
    />
  </div>
</div>
```

```jsx
const FilesUploaderExample = require('../__examples__/FilesUploader.example').default;

const files = [
  { id: '1', name: 'file1.txt' },
  { id: '2', name: 'file1.txt', loading: { final: 300, value: 100 } },
  { id: '3', name: 'file1.txt', loading: { final: 300, value: 300, error: true } },
];

<div className="omay-ds-block">
  <div className="omay-ds-block">
    <FilesUploaderExample
      id="FilesUploaderExample2"
      title="Заявление на аннулирование"
      files={files}
      maxFilesQty={6}
      maxFilesTotalSize={1000}
      maxFileSize={1000}
    />
  </div>
</div>
```
