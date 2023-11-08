const background =
  'data:image/png;base64,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';

export default background;