/* eslint-disable no-magic-numbers */
module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: {
            globalReturn: false,
            impliedStrict: false,
            jsx: false,
        },
    },
    env: {
        browser: true,
        node: true,
        // es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:vue/recommended',
    ],
    plugins: [
        // 'import',
        // 'node',
        // 'promise',
        'vue',
    ],
    // globals: {
    //     mapState: true,
    //     mapGetters: true,
    //     mapMutations: true,
    //     mapActions: true,
    // },
    rules: {
        /* Possible Problems */
        'array-callback-return': [
            'error',
            {
                allowImplicit: true,
                checkForEach: true,
            },
        ],
        'constructor-super': 'error',
        'for-direction': 'error',
        'getter-return': 'error',
        'no-async-promise-executor': 'error',
        'no-await-in-loop': 'error',
        'no-class-assign': 'error',
        'no-compare-neg-zero': 'error',
        'no-cond-assign': 'error',
        'no-const-assign': 'error',
        'no-constant-condition': 'error',
        'no-constructor-return': 'off',
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-dupe-args': 'error',
        'no-dupe-class-members': 'error',
        'no-dupe-else-if': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-duplicate-imports': 'error',
        'no-empty-character-class': 'error',
        'no-empty-pattern': 'error',
        'no-ex-assign': 'error',
        'no-fallthrough': 'error',
        'no-func-assign': 'error',
        'no-import-assign': 'error',
        'no-inner-declarations': ['error', 'both'],
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-loss-of-precision': 'error',
        'no-misleading-character-class': 'error',
        'no-new-symbol': 'error',
        'no-obj-calls': 'error',
        'no-promise-executor-return': 'error',
        'no-prototype-builtins': 'error',
        'no-self-compare': 'error',
        'no-setter-return': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-this-before-super': 'error',
        'no-undef': [
            'error', {
                typeof: true,
            },
        ],
        'no-unexpected-multiline': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unreachable': 'error',
        'no-unreachable-loop': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': [
            'error', {
                enforceForOrderingRelations: true,
            },
        ],
        'no-unsafe-optional-chaining': [
            'error', {
                disallowArithmeticOperators: true,
            },
        ],
        'no-unused-private-class-members': 'error',
        'no-unused-vars': [
            'error', {
                args: 'after-used',
                argsIgnorePattern: '^_',
                caughtErrors: 'all',
                caughtErrorsIgnorePattern: '^_',
                ignoreRestSiblings: true,
            },
        ],
        'no-use-before-define': 'error',
        'no-useless-backreference': 'error',
        'require-atomic-updates': 'error',
        'use-isnan': 'error',
        'valid-typeof': [
            'error', {
                requireStringLiterals: true,
            },
        ],

        /* Suggestions */
        'accessor-pairs': 'error',
        'arrow-body-style': ['error', 'as-needed'],
        'block-scoped-var': 'error',
        'camelcase': [
            'error', {
                properties: 'never',
            },
        ],
        'class-methods-use-this': 'error',
        'complexity': ['error', 10],
        'consistent-return': 'off',
        'consistent-this': ['error', 'self'],
        'curly': ['error', 'multi-line'],
        'default-case': [
            'error', {
                commentPattern: '^no\\sdefault',
            },
        ],
        'default-case-last': 'error',
        'default-param-last': 'off',
        'dot-notation': 'error',
        'eqeqeq': ['error', 'always'],
        'func-name-matching': 'error',
        'func-names': ['error', 'always'],
        'func-style': ['error', 'expression'],
        'grouped-accessor-pairs': ['error', 'getBeforeSet'],
        'guard-for-in': 'error',
        'id-denylist': 'off',
        'id-length': 'off',
        'id-match': 'off',
        'init-declarations': ['error', 'always'],
        'max-classes-per-file': ['error', 1],
        'max-depth': ['error', 4],
        'max-lines': [
            'off', {
                max: 500,
                skipBlankLines: true,
                skipComments: true,
            },
        ],
        'max-lines-per-function': [
            'warn', {
                max: 40,
                skipBlankLines: true,
                skipComments: true,
                IIFEs: true,
            },
        ],
        'max-nested-callbacks': ['warn', 2],
        'max-params': ['warn', 3],
        'max-statements': [
            'warn', 10, {
                ignoreTopLevelFunctions: true,
            },
        ],
        'multiline-comment-style': 'off',
        'new-cap': [
            'error', {
                newIsCap: true,
                capIsNew: true,
                properties: false,
            },
        ],
        'no-alert': 'error',
        'no-array-constructor': 'error',
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-confusing-arrow': [
            'error', {
                allowParens: true,
            },
        ],
        'no-console': [
            'error', {
                allow: ['warn', 'error'],
            },
        ],
        'no-continue': 'error',
        'no-delete-var': 'error',
        'no-div-regex': 'error',
        'no-else-return': [
            'error', {
                allowElseIf: true,
            },
        ],
        'no-empty': 'error',
        'no-empty-function': [
            'error', {
                allow: ['arrowFunctions', 'methods'],
            },
        ],
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-boolean-cast': [
            'error', {
                enforceForLogicalOperands: true,
            },
        ],
        'no-extra-label': 'error',
        'no-extra-semi': 'error',
        'no-floating-decimal': 'error',
        'no-global-assign': 'error',
        'no-implicit-coercion': [
            'error', {
                boolean: true,
                disallowTemplateShorthand: true,
                number: true,
                string: true,
            },
        ],
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-inline-comments': 'off',
        'no-invalid-this': 'error',
        'no-iterator': 'error',
        'no-label-var': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-lonely-if': 'error',
        'no-loop-func': 'error',
        'no-magic-numbers': [
            'warn', {
                ignore: [-1, 0, 1, 2],
                ignoreArrayIndexes: true,
                ignoreDefaultValues: true,
            },
        ],
        'no-mixed-operators': [
            'error', {
                allowSamePrecedence: true,
                groups: [['&', '|', '^', '~', '<<', '>>', '>>>'], ['==', '!=', '===', '!==', '>', '>=', '<', '<='], ['&&', '||'], ['in', 'instanceof']],
            },
        ],
        'no-multi-assign': 'error',
        'no-multi-str': 'error',
        'no-negated-condition': 'error',
        'no-nested-ternary': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-new-wrappers': 'error',
        'no-nonoctal-decimal-escape': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': [
            'error', {
                props: false,
            },
        ],
        'no-plusplus': 'off',
        'no-proto': 'error',
        'no-redeclare': 'error',
        'no-regex-spaces': 'error',
        'no-restricted-exports': 'off',
        'no-restricted-globals': [
            'error', {
                name: 'event',
                message: 'Use local parameter instead.',
            },
        ],
        'no-restricted-imports': 'off',
        'no-restricted-properties': 'off',
        'no-restricted-syntax': 'off',
        'no-return-assign': ['error', 'always'],
        'no-return-await': 'error',
        'no-script-url': 'error',
        'no-sequences': 'error',
        'no-shadow': 'error',
        'no-shadow-restricted-names': 'error',
        'no-ternary': 'off',
        'no-throw-literal': 'error',
        'no-undef-init': 'error',
        'no-undefined': 'error',
        'no-underscore-dangle': [
            'error', {
                allowAfterThis: true,
                allowAfterSuper: true,
                allowAfterThisConstructor: true,
            },
        ],
        'no-unneeded-ternary': [
            'error', {
                defaultAssignment: false,
            },
        ],
        'no-unused-expressions': [
            'error', {
                allowTernary: true,
            },
        ],
        'no-unused-labels': 'error',
        'no-useless-call': 'error',
        'no-useless-catch': 'error',
        'no-useless-computed-key': [
            'error', {
                enforceForClassMembers: true,
            },
        ],
        'no-useless-concat': 'error',
        'no-useless-constructor': 'error',
        'no-useless-escape': 'error',
        'no-useless-rename': 'error',
        'no-useless-return': 'error',
        'no-var': 'error',
        'no-void': 'error',
        'no-warning-comments': 'off',
        'no-with': 'error',
        'object-shorthand': ['error', 'always'],
        'one-var': [
            'error', {
                initialized: 'never',
                uninitialized: 'always',
            },
        ],
        'one-var-declaration-per-line': ['error', 'always'],
        'operator-assignment': ['error', 'always'],
        'prefer-arrow-callback': [
            'error', {
                allowNamedFunctions: true,
            },
        ],
        'prefer-const': [
            'error', {
                destructuring: 'all',
            },
        ],
        'prefer-destructuring': [
            'error', {
                VariableDeclarator: {
                    array: false,
                    object: true,
                },
            },
        ],
        'prefer-exponentiation-operator': 'error',
        'prefer-named-capture-group': 'off',
        'prefer-numeric-literals': 'error',
        'prefer-object-has-own': 'off',
        'prefer-object-spread': 'error',
        'prefer-promise-reject-errors': 'error',
        'prefer-regex-literals': [
            'error', {
                disallowRedundantWrapping: true,
            },
        ],
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'quote-props': ['error', 'consistent-as-needed'],
        'radix': 'error',
        'require-await': 'error',
        'require-unicode-regexp': 'off',
        'require-yield': 'error',
        'sort-imports': 'off',
        'sort-keys': 'off',
        'sort-vars': 'off',
        'spaced-comment': ['error', 'always'],
        'strict': 'error',
        'symbol-description': 'error',
        'vars-on-top': 'error',
        'yoda': 'error',

        /* Layout & Formatting */
        'array-bracket-newline': [
            'error', {
                multiline: true,
            },
        ],
        'array-bracket-spacing': ['error', 'never'],
        'array-element-newline': ['error', 'consistent'],
        'arrow-parens': ['error', 'as-needed'],
        'arrow-spacing': [
            'error', {
                before: true,
                after: true,
            },
        ],
        'block-spacing': 'error',
        'brace-style': [
            'error', '1tbs', {
                allowSingleLine: true,
            },
        ],
        'comma-dangle': ['error', 'always-multiline'],
        'comma-spacing': [
            'error', {
                before: false,
                after: true,
            },
        ],
        'comma-style': ['error', 'last'],
        'computed-property-spacing': [
            'error', 'never', {
                enforceForClassMembers: true,
            },
        ],
        'dot-location': ['error', 'property'],
        'eol-last': ['error', 'always'],
        'func-call-spacing': ['error', 'never'],
        'function-call-argument-newline': ['error', 'consistent'],
        'function-paren-newline': ['error', 'multiline'],
        'generator-star-spacing': [
            'error', {
                before: true,
                after: false,
            },
        ],
        'implicit-arrow-linebreak': ['error', 'beside'],
        'indent': [
            'error', 4, {
                SwitchCase: 1,
            },
        ],
        'jsx-quotes': ['error', 'prefer-double'],
        'key-spacing': [
            'error', {
                beforeColon: false,
                afterColon: true,
                mode: 'strict',
            },
        ],
        'keyword-spacing': [
            'error', {
                before: true,
                after: true,
            },
        ],
        'line-comment-position': 'off',
        'linebreak-style': ['off', 'unix'],
        'lines-around-comment': 'off',
        'lines-between-class-members': ['error', 'always'],
        'max-len': [
            'off', {
                code: 80,
                ignoreStrings: true,
                ignoreTrailingComments: true,
                ignoreComments: true,
                ignorePattern: '\\s*[path,background-image]\\s*',
            },
        ],
        'max-statements-per-line': [
            'error', {
                max: 1,
            },
        ],
        'multiline-ternary': ['error', 'always-multiline'],
        'new-parens': ['error', 'always'],
        'newline-per-chained-call': [
            'error', {
                ignoreChainWithDepth: 2,
            },
        ],
        'no-extra-parens': ['error', 'functions'],
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-spaces': 'error',
        'no-multiple-empty-lines': [
            'error', {
                max: 2,
            },
        ],
        'no-tabs': 'error',
        'no-trailing-spaces': 'error',
        'no-whitespace-before-property': 'error',
        'nonblock-statement-body-position': ['error', 'beside'],
        'object-curly-newline': [
            'error', {
                multiline: true,
                consistent: true,
            },
        ],
        'object-curly-spacing': ['error', 'always'],
        'object-property-newline': [
            'error', {
                allowAllPropertiesOnSameLine: false,
            },
        ],
        'operator-linebreak': [
            'error', 'after', {
                overrides: {
                    '?': 'before',
                    ':': 'before',
                },
            },
        ],
        'padded-blocks': 'off',
        'padding-line-between-statements': [
            'error', {
                blankLine: 'always',
                prev: '*',
                next: ['return', 'const', 'let', 'if', 'for', 'try'],
            }, {
                blankLine: 'always',
                prev: ['const', 'let', 'if', 'for', 'try'],
                next: '*',
            }, {
                blankLine: 'any',
                prev: ['const', 'let'],
                next: ['const', 'let'],
            }, {
                blankLine: 'never',
                prev: ['import'],
                next: ['import'],
            }, {
                blankLine: 'any',
                prev: '*',
                next: ['debugger'],
            }, {
                blankLine: 'any',
                prev: ['debugger'],
                next: '*',
            },
        ],
        'quotes': ['error', 'single'],
        'rest-spread-spacing': ['error', 'never'],
        'semi': ['error', 'always'],
        'semi-spacing': [
            'error', {
                before: false,
                after: true,
            },
        ],
        'semi-style': ['error', 'last'],
        'space-before-blocks': ['error', 'always'],
        'space-before-function-paren': [
            'error', {
                anonymous: 'never',
                asyncArrow: 'always',
                named: 'never',
            },
        ],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'switch-colon-spacing': [
            'error', {
                before: false,
                after: true,
            },
        ],
        'template-curly-spacing': ['error', 'never'],
        'template-tag-spacing': ['error', 'never'],
        'unicode-bom': ['error', 'never'],
        'wrap-iife': ['error', 'outside'],
        'wrap-regex': 'off',
        'yield-star-spacing': [
            'error', {
                before: true,
                after: false,
            },
        ],

        /* eslint-plugin-vue */

        /* Priority A: Essential */
        'vue/multi-word-component-names': [
            'error', {
                ignores: ['Root'],
            },
        ],
        'vue/no-arrow-functions-in-watch': 'error',
        'vue/no-async-in-computed-properties': 'error',
        'vue/no-custom-modifiers-on-v-model': 'error',
        'vue/no-dupe-keys': 'error',
        'vue/no-dupe-v-else-if': 'error',
        'vue/no-duplicate-attributes': [
            'error', {
                allowCoexistClass: true,
                allowCoexistStyle: true,
            },
        ],
        'vue/no-multiple-template-root': 0,
        'vue/no-mutating-props': 'error',
        'vue/no-parsing-error': 'error',
        'vue/no-reserved-keys': 'error',
        'vue/no-shared-component-data': 'error',
        'vue/no-side-effects-in-computed-properties': 'error',
        'vue/no-template-key': 'error',
        'vue/no-textarea-mustache': 'error',
        'vue/no-unused-components': 'error',
        'vue/no-unused-vars': [
            'error', {
                ignorePattern: '^_',
            },
        ],
        'vue/no-use-v-if-with-v-for': 'error',
        'vue/no-v-for-template-key': 'error',
        'vue/no-v-model-argument': 'error',
        'vue/require-component-is': 'error',
        'vue/require-prop-type-constructor': 'error',
        'vue/require-render-return': 'error',
        'vue/require-v-for-key': 'error',
        'vue/require-valid-default-prop': 'error',
        'vue/return-in-computed-property': 'error',
        'vue/use-v-on-exact': 'error',
        'vue/valid-next-tick': 'error',
        'vue/valid-template-root': 'error',
        'vue/valid-v-bind-sync': 'error',
        'vue/valid-v-bind': 'error',
        'vue/valid-v-cloak': 'error',
        'vue/valid-v-else-if': 'error',
        'vue/valid-v-else': 'error',
        'vue/valid-v-for': 'error',
        'vue/valid-v-html': 'error',
        'vue/valid-v-if': 'error',
        'vue/valid-v-model': 'error',
        'vue/valid-v-on': 'error',
        'vue/valid-v-once': 'error',
        'vue/valid-v-pre': 'error',
        'vue/valid-v-show': 'error',
        'vue/valid-v-slot': 'error',
        'vue/valid-v-text': 'error',

        /* Priority B: Strongly Recommended */
        'vue/attribute-hyphenation': ['error', 'never'],
        'vue/component-definition-name-casing': ['error', 'PascalCase'],
        'vue/first-attribute-linebreak': [
            'error', {
                singleline: 'beside',
                multiline: 'below',
            },
        ],
        'vue/html-closing-bracket-newline': [
            'error', {
                singleline: 'never',
                multiline: 'never',
            },
        ],
        'vue/html-closing-bracket-spacing': [
            'error', {
                startTag: 'never',
                endTag: 'never',
                selfClosingTag: 'always',
            },
        ],
        'vue/html-end-tags': 'error',
        'vue/html-indent': ['error', 4],
        'vue/html-quotes': ['error', 'double'],
        'vue/html-self-closing': [
            'error', {
                html: {
                    void: 'never',
                    normal: 'never',
                    component: 'always',
                },
                svg: 'always',
                math: 'always',
            },
        ],
        'vue/max-attributes-per-line': [
            'error', {
                singleline: 1,
                multiline: 1,
            },
        ],
        'vue/multiline-html-element-content-newline': [
            'error', {
                ignoreWhenEmpty: true,
                allowEmptyLines: false,
            },
        ],
        'vue/mustache-interpolation-spacing': ['error', 'always'],
        'vue/no-multi-spaces': 'error',
        'vue/no-spaces-around-equal-signs-in-attribute': 'error',
        'vue/no-template-shadow': 'error',
        'vue/one-component-per-file': 'error',
        'vue/prop-name-casing': ['error', 'camelCase'],
        'vue/require-default-prop': 'error',
        'vue/require-prop-types': 'error',
        'vue/singleline-html-element-content-newline': [
            'error', {
                ignoreWhenNoAttributes: true,
                ignoreWhenEmpty: true,
            },
        ],
        'vue/v-bind-style': ['error', 'shorthand'],
        'vue/v-on-style': ['error', 'shorthand'],
        'vue/v-slot-style': ['error', 'shorthand'],

        /* Priority C: Recommended */
        'vue/attributes-order': [
            'error', {
                order: ['DEFINITION', 'CONDITIONALS', 'TWO_WAY_BINDING', 'LIST_RENDERING', 'UNIQUE', 'SLOT', 'RENDER_MODIFIERS', 'OTHER_DIRECTIVES', 'CONTENT', 'GLOBAL', 'OTHER_ATTR', 'EVENTS'],
            },
        ],
        'vue/component-tags-order': [
            'error', {
                order: [['script', 'template'], 'style'],
            },
        ],
        'vue/no-lone-template': 'error',
        'vue/no-multiple-slot-args': 'error',
        'vue/no-v-html': 'warn',
        'vue/order-in-components': [
            'error', {
                order: [
                    'el',
                    'name',
                    'key',
                    'parent',
                    ['components', 'directives', 'filters'],
                    'functional',
                    ['delimiters', 'comments'],
                    'extends',
                    'mixins',
                    'inheritAttrs',
                    'data',
                    ['provide', 'inject'],
                    ['props', 'propsData'],
                    'model',
                    'computed',
                    'methods',
                    'watch',
                    'LIFECYCLE_HOOKS',
                    'ROUTER_GUARDS',
                    ['template', 'render'],
                    'renderError',
                ],
            },
        ],
        'vue/this-in-template': 'error',

        /* Uncategorized */
        'vue/block-lang': [
            'error', {
                script: {
                    lang: 'js',
                },
                style: {
                    allowNoLang: true,
                    lang: 'scss',
                },
                template: {
                    lang: 'html',
                },
            },
        ],
        'vue/block-tag-newline': [
            'error', {
                singleline: 'always',
                multiline: 'always',
                maxEmptyLines: 0,
            },
        ],
        'vue/component-api-style': ['error', ['options']],
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'vue/component-options-name-casing': ['error', 'PascalCase'],
        'vue/custom-event-name-casing': [
            'error', 'camelCase', {
                ignores: ['/^[a-zA-Z]+(?:[a-zA-Z]+)*:[a-zA-Z]+(?:[a-zA-Z]+)*(:[a-zA-Z]+(?:[a-zA-Z]+)*)?$/'],
            },
        ],
        'vue/html-button-has-type': [
            'error', {
                button: true,
                submit: true,
                reset: true,
            },
        ],
        'vue/html-comment-content-newline': [
            'error', {
                singleline: 'never',
                multiline: 'always',
            },
        ],
        'vue/html-comment-content-spacing': ['warn', 'always'],
        'vue/html-comment-indent': ['warn', 4],
        'vue/match-component-file-name': [
            'error', {
                extensions: ['vue'],
            },
        ],
        'vue/new-line-between-multi-line-property': 'off',
        'vue/next-tick-style': ['error', 'promise'],
        'vue/no-bare-strings-in-template': 'off',
        'vue/no-boolean-default': 'off',
        'vue/no-child-content': 'error',
        'vue/no-duplicate-attr-inheritance': 'error',
        'vue/no-empty-component-block': 'error',
        'vue/no-expose-after-await': 'error',
        'vue/no-invalid-model-keys': 'error',
        'vue/no-multiple-objects-in-class': 'error',
        'vue/no-potential-component-option-typo': [
            'error', {
                presets: ['all'],
            },
        ],
        'vue/no-reserved-component-names': 'error',
        'vue/no-restricted-block': 'off',
        'vue/no-restricted-call-after-await': 'off',
        'vue/no-restricted-class': 'off',
        'vue/no-restricted-component-options': 'off',
        'vue/no-restricted-custom-event': 'off',
        'vue/no-restricted-props': 'off',
        'vue/no-restricted-static-attribute': 'off',
        'vue/no-restricted-v-bind': 'error',
        'vue/no-static-inline-styles': [
            'error', {
                allowBinding: false,
            },
        ],
        'vue/no-template-target-blank': 'error',
        'vue/no-this-in-before-route-enter': 'error',
        // 'vue/no-undef-components': [
        //     'error', {
        //         // ignorePatterns: [
        //         //     'router-view',
        //         //     'router-link',
        //         //     'Sbs+',
        //         // ],
        //     },
        // ],
        'vue/no-undef-properties': 'off',
        'vue/no-unsupported-features': 'error',
        'vue/no-unused-properties': [
            'error', {
                deepData: true,
                groups: ['props', 'data', 'computed', 'methods'],
                ignorePublicMembers: true,
            },
        ],
        'vue/no-unused-refs': 'error',
        'vue/no-use-computed-property-like-method': 'error',
        'vue/no-useless-mustaches': [
            'error', {
                ignoreIncludesComment: true,
                ignoreStringEscape: true,
            },
        ],
        'vue/no-useless-v-bind': 'error',
        // 'vue/no-v-text-v-html-on-component': 'error',
        'vue/no-v-text': 'error',
        'vue/padding-line-between-blocks': ['error', 'always'],
        'vue/prefer-separate-static-class': 'error',
        'vue/require-direct-export': 'error',
        'vue/require-emit-validator': 'error',
        'vue/require-expose': 'off',
        'vue/require-name-property': 'error',
        'vue/script-indent': [
            'error', 4, {
                switchCase: 1,
            },
        ],
        'vue/sort-keys': 'off',
        'vue/static-class-names-order': 'off',
        'vue/v-for-delimiter-style': ['error', 'in'],
        'vue/v-on-event-hyphenation': [
            'error', 'never', {
                autofix: false,
                ignore: [
                /* vue-accessible-color-picker events */
                    'color-change',
                ],
            },
        ],
        'vue/v-on-function-call': ['error', 'never'],

        /* Extension Rules */
        'vue/array-bracket-newline': 'error',
        'vue/array-bracket-spacing': ['error', 'never'],
        'vue/arrow-spacing': 'error',
        'vue/block-spacing': 'error',
        'vue/brace-style': [
            'error', '1tbs', {
                allowSingleLine: true,
            },
        ],
        'vue/camelcase': [
            'error', {
                properties: 'never',
            },
        ],
        'vue/comma-dangle': ['error', 'always-multiline'],
        'vue/comma-spacing': 'error',
        'vue/comma-style': 'error',
        'vue/dot-location': ['error', 'property'],
        'vue/dot-notation': 'error',
        'vue/eqeqeq': ['error', 'always'],
        'vue/func-call-spacing': ['error', 'never'],
        'vue/key-spacing': [
            'error', {
                beforeColon: false,
                afterColon: true,
                mode: 'strict',
            },
        ],
        'vue/keyword-spacing': [
            'error', {
                before: true,
                after: true,
            },
        ],
        'vue/max-len': [
            'off', {
                tabWidth: 4,
                ignoreComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
                ignoreHTMLAttributeValues: true,
                ignoreHTMLTextContents: true,
            },
        ],
        'vue/no-constant-condition': [
            'error', {
                checkLoops: true,
            },
        ],
        'vue/no-empty-pattern': 'error',
        'vue/no-extra-parens': ['error', 'functions'],
        'vue/no-irregular-whitespace': 'error',
        'vue/no-loss-of-precision': 'error',
        'vue/no-restricted-syntax': 'off',
        'vue/no-sparse-arrays': 'error',
        'vue/no-useless-concat': 'error',
        'vue/object-curly-newline': [
            'error', {
                multiline: true,
                consistent: true,
            },
        ],
        'vue/object-curly-spacing': ['error', 'always'],
        'vue/object-property-newline': [
            'error', {
                allowAllPropertiesOnSameLine: false,
            },
        ],
        // 'vue/object-shorthand': ['error', 'always'],
        'vue/operator-linebreak': [
            'error', 'after', {
                overrides: {
                    '?': 'before',
                    ':': 'before',
                },
            },
        ],
        'vue/prefer-template': 'error',
        // 'vue/quote-props': ['error', 'consistent-as-needed'],
        'vue/space-in-parens': ['error', 'never'],
        'vue/space-infix-ops': 'error',
        'vue/space-unary-ops': 'error',
        'vue/template-curly-spacing': ['error', 'never'],

        /* eslint-plugin-import */
        // 'import/default': 'error',
        // 'import/dynamic-import-chunkname': 'off',
        // 'import/export': 'error',
        // 'import/export-last': 'off',
        // 'import/extensions': ['error', 'always'],
        // 'import/first': 'error',
        // 'import/group-exports': 'off',
        // 'import/max-dependencies': 'off',
        // 'import/named': 'error',
        // 'import/namespace': 'off',
        // 'import/newline-after-import': 'off',
        // 'import/no-absolute-path': 'error',
        // 'import/no-amd': 'error',
        // 'import/no-anonymous-default-export': 'off',
        // 'import/no-commonjs': 'off',
        // 'import/no-cycle': 'error',
        // 'import/no-default-export': 'off',
        // 'import/no-deprecated': 'error',
        // 'import/no-duplicates': 'error',
        // 'import/no-dynamic-require': 'off',
        // 'import/no-extraneous-dependencies': [
        //     'error', {
        //     // Список путей для которых проверка не осуществляется
        //         devDependencies: ['./.storybook/**', './src/dev/**', './*.js', '**/*.test.js', '**/*.spec.js', '**/*.stories.js'],
        //     },
        // ],
        // 'import/no-import-module-exports': 'error',
        // 'import/no-internal-modules': 'off',
        // 'import/no-mutable-exports': 'error',
        // 'import/no-named-as-default': 'error',
        // 'import/no-named-as-default-member': 'error',
        // 'import/no-named-default': 'error',
        // 'import/no-named-export': 'off',
        // 'import/no-namespace': 'off',
        // 'import/no-nodejs-modules': 'off',
        // 'import/no-relative-packages': 'error',
        // 'import/no-relative-parent-imports': 'off',
        // 'import/no-restricted-paths': 'off',
        // 'import/no-self-import': 'error',
        // 'import/no-unassigned-import': 'off',
        // 'import/no-unresolved': [
        //     'error', {
        //         amd: true,
        //         commonjs: true,
        //     },
        // ],
        // 'import/no-unused-modules': [
        //     'off', {
        //         ignoreExports: ['**/*.stories.js'],
        //         unusedExports: true,
        //     },
        // ],
        // 'import/no-useless-path-segments': 'error',
        // 'import/no-webpack-loader-syntax': 'error',
        // 'import/order': [
        //     'error', {
        //         groups: [
        //             'builtin',
        //             /* node.js modules, e.g. "fs", "path" */
        //             'external',
        //             /* modules from node_modules, e.g. "lodash" */
        //             'internal',
        //             /* modules with alias path, e.g. "@/foo/bar/baz.js" */
        //             'parent',
        //             /* modules from "parent" directory, e.g. "../foo.js", "../../foo/bar.js" */
        //             'sibling',
        //             /* modules from the same or a sibling's directory, e.g. "./foo.js", "./foo/bar.js" */
        //             'index',
        //         /* "index" file of the current directory "./index.js" */
        //         ],
        //         pathGroups: [
        //             {
        //                 pattern: '**/*.{css,scss}',
        //                 group: 'builtin',
        //                 position: 'before',
        //             }, {
        //                 pattern: '**/*.vue',
        //                 group: 'internal',
        //                 position: 'after',
        //             },
        //         ],
        //     },
        // ],
        // 'import/prefer-default-export': 'off',
        // 'import/unambiguous': 'off',

        // /* eslint-plugin-node */
        // 'node/callback-return': 'off',
        // 'node/exports-style': ['error', 'module.exports'],
        // 'node/file-extension-in-import': ['error', 'always'],
        // 'node/global-require': 'error',
        // 'node/handle-callback-err': ['error', 'error'],
        // 'node/no-callback-literal': 'off',
        // 'node/no-deprecated-api': [
        //     'error', {
        //         ignoreModuleItems: ['constants'],
        //     },
        // ],
        // 'node/no-exports-assign': 'error',
        // 'node/no-extraneous-import': 'error',
        // 'node/no-extraneous-require': 'error',
        // 'node/no-missing-import': 'off',
        // 'node/no-missing-require': 'off',
        // 'node/no-mixed-requires': 'error',
        // 'node/no-new-require': 'error',
        // 'node/no-path-concat': 'error',
        // 'node/no-process-env': 'off',
        // 'node/no-process-exit': 'error',
        // 'node/no-restricted-import': 'off',
        // 'node/no-restricted-require': 'off',
        // 'node/no-sync': 'error',
        // 'node/no-unpublished-bin': 'off',
        // 'node/no-unpublished-import': 'off',
        // 'node/no-unpublished-require': 'off',
        // 'node/process-exit-as-throw': 'error',
        // 'node/shebang': 'off',

        // /* eslint-plugin-promise */
        // 'promise/always-return': 'off',
        // 'promise/avoid-new': 'off',
        // 'promise/catch-or-return': 'error',
        // 'promise/no-callback-in-promise': 'off',
        // 'promise/no-native': 'off',
        // 'promise/no-nesting': 'error',
        // 'promise/no-new-statics': 'error',
        // 'promise/no-promise-in-callback': 'off',
        // 'promise/no-return-in-finally': 'off',
        // 'promise/no-return-wrap': 'off',
        // 'promise/param-names': 'error',
        // 'promise/prefer-await-to-callbacks': 'off',
        // 'promise/prefer-await-to-then': 'error',
        // 'promise/valid-params': 'error',
    },
};
