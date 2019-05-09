module.exports = {
  'ignoreFiles': [
    'src/sass/lib/**'
  ],
  'plugins': [
    'stylelint-order',
    'stylelint-scss'
  ],
  'rules': {
    'at-rule-name-case': 'lower',
    'at-rule-name-space-after': 'always-single-line',
    'at-rule-no-vendor-prefix': true,
    'at-rule-semicolon-newline-after': 'always',
    'at-rule-semicolon-space-before': 'never',
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': [
      'always',
      {
        'ignoreAtRules': [
          'if',
          'else'
        ]
      }
    ],
    'block-closing-brace-newline-before': 'always-multi-line',
    'block-closing-brace-space-before': 'always-single-line',
    'block-no-empty': true,
    'block-opening-brace-newline-after': 'always-multi-line',
    'block-opening-brace-space-after': 'always-single-line',
    'block-opening-brace-space-before': 'always-multi-line',
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-no-invalid-hex': true,
    'comment-no-empty': true,
    'comment-whitespace-inside': 'always',
    'custom-property-pattern': /^[a-z][a-z0-9]*(-[a-z0-9]+)*$/,
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-block-no-duplicate-properties': [
      true,
      {
        'ignoreProperties': [
          'word-break',
        ]
      }
    ],
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-semicolon-newline-after': 'always-multi-line',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'declaration-no-important': true,
    'font-family-no-duplicate-names': true,
    'function-calc-no-unspaced-operator': true,
    'function-comma-newline-after': 'always-multi-line',
    'function-comma-newline-before': 'never-multi-line',
    'function-comma-space-after': 'always-single-line',
    'function-comma-space-before': 'never',
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-max-empty-lines': 1,
    'function-name-case': 'lower',
    'function-parentheses-newline-inside': 'always-multi-line',
    'function-parentheses-space-inside': 'never-single-line',
    'function-url-no-scheme-relative': true,
    'function-url-quotes': 'always',
    'function-whitespace-after': 'always',
    'indentation': 2,
    'keyframe-declaration-no-important': true,
    'length-zero-no-unit': true,
    'max-nesting-depth': 7,
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'media-query-list-comma-newline-after': 'always-multi-line',
    'media-query-list-comma-newline-before': 'never-multi-line',
    'media-query-list-comma-space-after': 'always-single-line',
    'media-query-list-comma-space-before': 'never',
    'no-duplicate-at-import-rules': true,
    'no-eol-whitespace': true,
    'no-extra-semicolons': true,
    'no-missing-end-of-source-newline': true,
    'number-leading-zero': 'never',
    'number-no-trailing-zeros': true,
    'property-case': 'lower',
    'property-no-unknown': true,
    'property-no-vendor-prefix': true,
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'always',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-list-comma-newline-after': 'always',
    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-space-before': 'never',
    'selector-max-compound-selectors': 5,
    'selector-max-empty-lines': 0,
    'selector-max-universal': 1,
    'selector-no-qualifying-type': [
      true,
      {
        'ignore': [
          'attribute',
          'class',
          'id'
        ]
      }
    ],
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-type-case': 'lower',
    'shorthand-property-no-redundant-values': true,
    'string-no-newline': true,
    'string-quotes': 'double',
    'unit-case': 'lower',
    'unit-no-unknown': true,
    'value-list-comma-newline-before': 'never-multi-line',
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',
    'value-list-max-empty-lines': 1,
    'value-no-vendor-prefix': true,

    'order/order': [
      [
        'custom-properties',
        'dollar-variables',
        'declarations',
        'rules'
      ]
    ],
    'order/properties-order': [
      {
        'properties': [
          'content',
          'quotes'
        ]
      },
      {
        'properties': [
          'display',
          'visibility'
        ]
      },
      {
        'properties': [
          'position',
          'z-index',
          'top',
          'right',
          'bottom',
          'left'
        ]
      },
      {
        'properties': [
          'box-sizing'
        ]
      },
      {
        'properties': [
          'grid',
          'grid-area',
          'grid-auto-columns',
          'grid-auto-flow',
          'grid-auto-rows',
          'grid-column',
          'grid-column-end',
          'grid-column-gap',
          'grid-column-start',
          'grid-gap',
          'grid-row',
          'grid-row-end',
          'grid-row-gap',
          'grid-row-start',
          'grid-template',
          'grid-template-areas',
          'grid-template-columns',
          'grid-template-rows'
        ]
      },
      {
        'properties': [
          'flex',
          'flex-basis',
          'flex-direction',
          'flex-flow',
          'flex-grow',
          'flex-shrink',
          'flex-wrap',
          'box-decoration-break',
          'align-content',
          'align-items',
          'align-self',
          'justify-content',
          'order'
        ]
      },
      {
        'properties': [
          'width',
          'min-width',
          'max-width',
          'height',
          'min-height',
          'max-height'
        ]
      },
      {
        'properties': [
          'margin',
          'margin-top',
          'margin-right',
          'margin-bottom',
          'margin-left'
        ]
      },
      {
        'properties': [
          'padding',
          'padding-top',
          'padding-right',
          'padding-bottom',
          'padding-left'
        ]
      },
      {
        'properties': [
          'float',
          'clear'
        ]
      },
      {
        'properties': [
          'overflow',
          'overflow-x',
          'overflow-y'
        ]
      },
      {
        'properties': [
          'clip',
          'zoom'
        ]
      },
      {
        'properties': [
          'columns',
          'column-gap',
          'column-fill',
          'column-rule',
          'column-span',
          'column-count',
          'column-width'
        ]
      },
      {
        'properties': [
          'table-layout',
          'empty-cells',
          'caption-side',
          'border-spacing',
          'border-collapse'
        ]
      },
      {
        'properties': [
          'list-style',
          'list-style-position',
          'list-style-type',
          'list-style-image'
        ]
      },
      {
        'properties': [
          'transform',
          'transform-origin',
          'transform-style',
          'backface-visibility',
          'perspective',
          'perspective-origin'
        ]
      },
      {
        'properties': [
          'transition',
          'transition-property',
          'transition-duration',
          'transition-timing-function',
          'transition-delay'
        ]
      },
      {
        'properties': [
          'animation',
          'animation-name',
          'animation-duration',
          'animation-play-state',
          'animation-timing-function',
          'animation-delay',
          'animation-iteration-count',
          'animation-direction'
        ]
      },
      {
        'properties': [
          'border',
          'border-top',
          'border-right',
          'border-bottom',
          'border-left',
          'border-width',
          'border-top-width',
          'border-right-width',
          'border-bottom-width',
          'border-left-width'
        ]
      },
      {
        'properties': [
          'border-style',
          'border-top-style',
          'border-right-style',
          'border-bottom-style',
          'border-left-style'
        ]
      },
      {
        'properties': [
          'border-radius',
          'border-top-left-radius',
          'border-top-right-radius',
          'border-bottom-left-radius',
          'border-bottom-right-radius'
        ]
      },
      {
        'properties': [
          'border-color',
          'border-top-color',
          'border-right-color',
          'border-bottom-color',
          'border-left-color'
        ]
      },
      {
        'properties': [
          'outline',
          'outline-color',
          'outline-offset',
          'outline-style',
          'outline-width'
        ]
      },
      {
        'properties': [
          'stroke-width',
          'stroke-linecap',
          'stroke-dasharray',
          'stroke-dashoffset',
          'stroke'
        ]
      },
      {
        'properties': [
          'opacity'
        ]
      },
      {
        'properties': [
          'background',
          'background-color',
          'background-image',
          'background-repeat',
          'background-position',
          'background-size',
          'box-shadow',
          'fill'
        ]
      },
      {
        'properties': [
          'color'
        ]
      },
      {
        'properties': [
          'font',
          'font-family',
          'font-size',
          'font-size-adjust',
          'font-stretch',
          'font-effect',
          'font-style',
          'font-variant',
          'font-weight'
        ]
      },
      {
        'properties': [
          'font-emphasize',
          'font-emphasize-position',
          'font-emphasize-style'
        ]
      },
      {
        'properties': [
          'letter-spacing',
          'line-height',
          'word-spacing'
        ]
      },
      {
        'properties': [
          'text-align',
          'text-align-last',
          'text-decoration',
          'text-indent',
          'text-justify',
          'text-overflow',
          'text-overflow-ellipsis',
          'text-overflow-mode',
          'text-rendering',
          'text-outline',
          'text-shadow',
          'text-transform',
          'text-wrap',
          'word-wrap',
          'word-break'
        ]
      },
      {
        'properties': [
          'text-emphasis',
          'text-emphasis-color',
          'text-emphasis-style',
          'text-emphasis-position'
        ]
      },
      {
        'properties': [
          'vertical-align',
          'white-space',
          'hyphens'
        ]
      },
      {
        'properties': [
          'src'
        ]
      },
      {
        'properties': [
          'tab-size',
          'counter-reset',
          'counter-increment',
          'resize',
          'cursor',
          'pointer-events',
          'speak',
          'user-select',
          'nav-index',
          'nav-up',
          'nav-right',
          'nav-down',
          'nav-left'
        ]
      }
    ],

    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-else-closing-brace-space-after': 'always-intermediate',
    'scss/at-else-empty-line-before': 'never',
    'scss/at-else-if-parentheses-space-before': 'always',
    'scss/at-function-parentheses-space-before': 'never',
    'scss/at-function-pattern': /^[a-z][a-z0-9]*(-[a-z0-9]+)*$/,
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-if-closing-brace-space-after': 'always-intermediate',
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-mixin-argumentless-call-parentheses': 'never',
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/at-mixin-pattern': /^[a-z][a-z0-9]*(-[a-z0-9]+)*$/,
    'scss/declaration-nested-properties-no-divided-groups': true,
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-pattern': /^[a-z][a-z0-9]*(-[a-z0-9]+)*$/,
    'scss/operator-no-unspaced': true,
    'scss/percent-placeholder-pattern': /^[a-z][a-z0-9]*(-[a-z0-9]+)*$/,
    'scss/selector-no-redundant-nesting-selector': true,
  }
};
