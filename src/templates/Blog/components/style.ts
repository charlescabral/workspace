import { styled } from '@/styles'

export const Post = styled('article', {
  wordBreak: 'break-word',

  p: {
    marginBottom: '$10'
  },

  a: {
    display: 'inline-block',
    position: 'relative',
    outline: 'none',
    transition: 'color 250ms 33ms cubic-bezier(0.19, 1, 0.22, 1)',

    '&::before': {
      content: "''",
      display: 'block',
      height: '0.5rem',
      position: 'absolute',
      top: '50%',
      right: '-0.15rem',
      left: '-0.1rem',
      zIndex: '-1',
      backgroundColor: 'hsl(223, 75%, 92%)',
      transform: 'translateY(0%) rotateZ(-3deg)',
      transition:
        'background-color var(250ms 33ms cubic-bezier(0.19, 1, 0.22, 1)), transform var(250ms 33ms cubic-bezier(0.19, 1, 0.22, 1))'
    },

    '&:hover, &:focus': {
      color: 'white',

      '&::before': {
        backgroundColor: '$primary',
        transform: 'translateY(-50%) rotateZ(-1deg) scaleY(2)'
      }
    }
  }

  // '.heading-number': {
  //   fontFamily: '$mono'
  // },

  // figure: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   my: '$10',

  //   img: {
  //     borderRadius: '$xs',
  //     display: 'block',
  //     margin: '10px auto',
  //     OObjectFit: 'contain',
  //     objectFit: 'contain',
  //     boxShadow: '$md'
  //   }
  // },

  // '.qrcode-box': {
  //   fontFamily: '$sans',
  //   borderRadius: '$xs',
  //   display: 'flex',
  //   justifyContent: 'space-between',
  //   marginTop: '1rem',
  //   marginBottom: '1rem',
  //   padding: '1rem',
  //   color: '#718096',
  //   backgroundColor: '#f6f6f6',
  //   border: '1px solid #efefef',

  //   p: {
  //     margin: '0'
  //   }
  // },

  // blockquote: {
  //   '.qrcode-box': {
  //     backgroundColor: 'transparent',
  //     border: '1px solid #e3e3e3'
  //   }
  // },

  // '.qrcode-text': {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'space-around',
  //   wordBreak: 'break-all',
  //   fontSize: '.875rem',
  //   lineHeight: '1$1',
  //   width: 'calc(100% - 96px)',
  //   color: '#718096'
  // },

  // '.qrcode-img': {
  //   width: '$40',
  //   height: '$40',
  //   marginLeft: '4px',
  //   flexShrink: '0'
  // },

  // 'pre, pre code.hljs': {
  //   display: 'block',
  //   overflowX: 'auto',
  //   color: '#abb2bf',
  //   background: '#282c34'
  // },

  // pre: {
  //   'code.hljs': {
  //     padding: '12px',
  //     paddingTop: '6px',
  //     fontSize: '.85em'
  //   },

  //   '&::before': {
  //     content: "''",
  //     display: 'block',
  //     backgroundImage:
  //       'url(data:image/png;\n    base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAAAcCAYAAACERFoMAAAFdklEQVRoQ+2aTWwTRxiGv5nddez1/jjGAYJDEwhSCRzDjUKDgFagVAgQ7aURvVDEFXFFCHGlXBHiUkQvLSIIkYLagBpA3MgR0koEEogJEMfx/njX8e7OVLuOU0jjkKzXaSOtzzuzj+fd79U7Mx+C8LeiVgAtlvZxZye3plHcboPTgSik3HEUQZYFZujtlPZo2+Cgtdi56vHc40ud3Cpe2U4c0oEQKvNRmsUMHpo05Efbjv+3fJ2XOrm3ycJ2SlEHoPL6AYUsQnRoLBd/BIvk+6hgI7s/38Uw6CShdB/LMlqE4yIsg2Pu+2yHmCXLKtm2I2KE7jgOvdB27/4f9RCk2pzPrrTv4lw+QvdxLNYiESbCMjDDB2ap5JQsm4gYozuWQy9sOjq8rHzpnz/dBRx7kjpkH8OxGo6wEcSW14/axCQlu+RYtogYfAc5zg9jR/4cWGj9qgo28uWOZkSYyxjDTlkUxHgsChjjeecihEDBLIKi6Roh8IBi51jbbw/H6yncyNXWZgD2MgK0MyFxosCzgPH8f4cQCrphQ161NAr0AYB9rK1ntK58rdc7mm3AlwHBzgYpLrLxKKAqfJRQsApFKKkFDQDuswXy/WjP0Lx88/5Dt6oQhl5J4OWEJH60Ct8XJq9qVNUNhRI4VK9qc6uKRdAriZzcKEWWxDellqiqWYpN4VC9qs2rKpbp5cSY3CALS+KbVnRqqaaCKDk4X7X9a7IZsfpTjTLDx6K+isQwi5CdUhxKYG/QorliMQj6m5INTDzG+uIrmDZM5KYdh8LeoEVzxaIM7o+tkhmWb/DFZxvTYGYVBwPdM1e0DwQr2yB+mmqUE37FqhDOiJanmGwJyh49G6Ts01SyIeFXrAqfK1o2N50HZG8Jyh7LNoieRpNSwq9YFT5XtOKkmmcR3TJ6+B97/ECw0b1dfZIQ279UG6z2GZXt0bzd2j/Q7etTmzNo5Gp7nyRw+5dqg9Xe7dmjbt1u6xkOhC99fWsfJ0b3L9UGq/F59qgXf80cevJV5ZlZwbw0yKKbLWtXi0EsbmWOsTfvNMemB2q1Ri8NYnTzk3V8oHwvXxuaReiBWq1xJg3eFNKpQPn0TFYDyz6Q+eYvL93OCvbqi65bsiR0i3E+SL1AKxigqHrf+t8HZr8SPy8Y/WnTrYTIdUsC52d41TGqbkFes/pav31WE1+6d+utBinezYleYg/sZ2kmTKuFvkqVeYK5m+KmpGC2rG1iqkV3vwRu5B97M+FM5PSY3821tymO5c1PmnmmWnT3z0fh5bjhTJqJmN/NtbspHk8aptDSxFSL7n753Mivj004zTk+Nnh80PIEe7Wnqwtz+Ma61amE34kXGvf6XTZPLHJw/d2BBTeF1eZ4cXVTF8egG+k1sbrwZd6aecuhBzf0PPPF13JtcxfiuBt8c7IufMZ4Lk8ty4v5nmAv9uw4IfD8+VSjHKwfziiQnVIM3TBObbj78KKfD2L4x40nRCFyvqkxUhe+iamSoemlU+3fPffFl/6l4wQrRM9HV0l14StOqoatF09lvh666Ak2snvHaVkSzgaVDueK4qZFRdXPtN17eM6PYM+vtJ9OSNzZoNLhXAY3LeZV68zGo8O++NLXOk5zMn82qHQ4l89Li4pxJnNk6FwoGACsOMFCS1xhlhiGjhUWOsJYv8JivRftw43zytk4l5NieDTlJ8FWxiz70ZT74vDwtxbJAOpy+KsVb2cOP5k9nA6vV/7P1ys5Nc/CAtcrFWtEGMILTJ/FFtgF5qTiYPqRC8wKY9gi4FOtmWE1twhopoLIIlsEZkULm3BqUm1Zm3DeJw3b3GrSDZatzW0uZthIWptw7p3Zm4T+GSC8ua6NpLVhhqODXoG/AV56X1lhWm2vAAAAAElFTkSuQmCC)',
  //     height: '30px',
  //     width: '100%',
  //     backgroundSize: '40px',
  //     backgroundRepeat: 'no-repeat',
  //     backgroundColor: '$black11',
  //     marginBottom: '-7px',
  //     borderRadius: '$xs',
  //     backgroundPosition: '10px 10px'
  //   }
  // },

  // '.svg-markmap-box': {
  //   minHeight: '20rem',
  //   width: '100%'
  // },

  // '.footnote-backref': {
  //   display: 'none'
  // },

  // '.footnotes-title': {
  //   marginBottom: '1rem',
  //   fontSize: '1.125rem',
  //   lineHeight: '1.75rem',
  //   fontWeight: '500'
  // },

  // '.footnotes': {
  //   fontSize: '.875rem',
  //   lineHeight: '1$1'
  // },

  // '.footnote-item': {
  //   marginTop: '$1',
  //   marginBottom: '$1',
  //   display: 'flex',

  //   p: {
  //     margin: '0',
  //     padding: '0',
  //     lineHeight: '25px'
  //   }
  // },

  // '.footnote-link': {
  //   borderBottomWidth: '1px',
  //   borderBottomColor: '#6b7280',
  //   borderBottomStyle: 'dashed'
  // },

  // '.footnote-num': {
  //   width: '3$xs',
  //   flexShrink: '0',
  //   verticalAlign: 'middle',
  //   fontFamily:
  //     'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
  //   fontSize: '13px',
  //   opacity: '.7',
  //   lineHeight: '25px'
  // },

  // img: {
  //   maxWidth: '100%'
  // },

  // '.qrcode-img img': {
  //   margin: 'auto'
  // },

  // ol: {
  //   listStyle: 'decimal'
  // },

  // ul: {
  //   listStyle: 'circle'
  // },

  // '.square': {
  //   backgroundImage:
  //     'linear-gradient(90deg,rgba(50,0,0,.07) 3%,rgba(0,0,0,0) 3%),linear-gradient(360deg,rgba(50,0,0,.07) 3%,rgba(0,0,0,0) 3%)',
  //   backgroundSize: '20px 20px',
  //   backgroundPosition: 'center center'
  // }
})

export const Highlight = styled('div', {
  'code, pre': {
    background: 'none',
    fontFeatureSettings: 'normal',
    textAlign: 'left',
    overflow: 'hidden',
    borderRadius: '$sm',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    marginBottom: '0',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    MsHyphens: 'none',
    hyphens: 'none'
  },

  code: {
    padding: '$10'
  },

  pre: {
    margin: '$10 -$20',
    '&[data-line]': {
      padding: '1em 0 1em 3em',
      position: 'relative'
    },
    '&:[class*="lang-"]': {
      overflow: 'auto',
      padding: '1em',

      '&::selection, ::selection': {
        background: 'hsl(207, 4%, 16%)'
      }
    },
    '&::before': {
      content: '',
      display: 'block',
      backgroundImage:
        'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAAAcCAYAAACERFoMAAAFdklEQVRoQ+2aTWwTRxiGv5nddez1/jjGAYJDEwhSCRzDjUKDgFagVAgQ7aURvVDEFXFFCHGlXBHiUkQvLSIIkYLagBpA3MgR0koEEogJEMfx/njX8e7OVLuOU0jjkKzXaSOtzzuzj+fd79U7Mx+C8LeiVgAtlvZxZye3plHcboPTgSik3HEUQZYFZujtlPZo2+Cgtdi56vHc40ud3Cpe2U4c0oEQKvNRmsUMHpo05Efbjv+3fJ2XOrm3ycJ2SlEHoPL6AYUsQnRoLBd/BIvk+6hgI7s/38Uw6CShdB/LMlqE4yIsg2Pu+2yHmCXLKtm2I2KE7jgOvdB27/4f9RCk2pzPrrTv4lw+QvdxLNYiESbCMjDDB2ap5JQsm4gYozuWQy9sOjq8rHzpnz/dBRx7kjpkH8OxGo6wEcSW14/axCQlu+RYtogYfAc5zg9jR/4cWGj9qgo28uWOZkSYyxjDTlkUxHgsChjjeecihEDBLIKi6Roh8IBi51jbbw/H6yncyNXWZgD2MgK0MyFxosCzgPH8f4cQCrphQ161NAr0AYB9rK1ntK58rdc7mm3AlwHBzgYpLrLxKKAqfJRQsApFKKkFDQDuswXy/WjP0Lx88/5Dt6oQhl5J4OWEJH60Ct8XJq9qVNUNhRI4VK9qc6uKRdAriZzcKEWWxDellqiqWYpN4VC9qs2rKpbp5cSY3CALS+KbVnRqqaaCKDk4X7X9a7IZsfpTjTLDx6K+isQwi5CdUhxKYG/QorliMQj6m5INTDzG+uIrmDZM5KYdh8LeoEVzxaIM7o+tkhmWb/DFZxvTYGYVBwPdM1e0DwQr2yB+mmqUE37FqhDOiJanmGwJyh49G6Ts01SyIeFXrAqfK1o2N50HZG8Jyh7LNoieRpNSwq9YFT5XtOKkmmcR3TJ6+B97/ECw0b1dfZIQ279UG6z2GZXt0bzd2j/Q7etTmzNo5Gp7nyRw+5dqg9Xe7dmjbt1u6xkOhC99fWsfJ0b3L9UGq/F59qgXf80cevJV5ZlZwbw0yKKbLWtXi0EsbmWOsTfvNMemB2q1Ri8NYnTzk3V8oHwvXxuaReiBWq1xJg3eFNKpQPn0TFYDyz6Q+eYvL93OCvbqi65bsiR0i3E+SL1AKxigqHrf+t8HZr8SPy8Y/WnTrYTIdUsC52d41TGqbkFes/pav31WE1+6d+utBinezYleYg/sZ2kmTKuFvkqVeYK5m+KmpGC2rG1iqkV3vwRu5B97M+FM5PSY3821tymO5c1PmnmmWnT3z0fh5bjhTJqJmN/NtbspHk8aptDSxFSL7n753Mivj004zTk+Nnh80PIEe7Wnqwtz+Ma61amE34kXGvf6XTZPLHJw/d2BBTeF1eZ4cXVTF8egG+k1sbrwZd6aecuhBzf0PPPF13JtcxfiuBt8c7IufMZ4Lk8ty4v5nmAv9uw4IfD8+VSjHKwfziiQnVIM3TBObbj78KKfD2L4x40nRCFyvqkxUhe+iamSoemlU+3fPffFl/6l4wQrRM9HV0l14StOqoatF09lvh666Ak2snvHaVkSzgaVDueK4qZFRdXPtN17eM6PYM+vtJ9OSNzZoNLhXAY3LeZV68zGo8O++NLXOk5zMn82qHQ4l89Li4pxJnNk6FwoGACsOMFCS1xhlhiGjhUWOsJYv8JivRftw43zytk4l5NieDTlJ8FWxiz70ZT74vDwtxbJAOpy+KsVb2cOP5k9nA6vV/7P1ys5Nc/CAtcrFWtEGMILTJ/FFtgF5qTiYPqRC8wKY9gi4FOtmWE1twhopoLIIlsEZkULm3BqUm1Zm3DeJw3b3GrSDZatzW0uZthIWptw7p3Zm4T+GSC8ua6NpLVhhqODXoG/AV56X1lhWm2vAAAAAElFTkSuQmCC)',
      height: '$12',
      width: '100%',
      backgroundSize: '3rem',
      backgroundRepeat: 'no-repeat',
      backgroundColor: '$black11',
      backgroundPosition: '1rem'
    }
  },

  ':not(pre) > code[class*="lang-"]': {
    borderRadius: '0.3em',
    background: 'var(--inlineCode-bg)',
    color: 'var(--inlineCode-text)',
    padding: '0.15em 0.2em 0.05em',
    whiteSpace: 'normal'
  },

  'pre, pre code.hljs': {
    display: 'block',
    overflowX: 'auto',
    color: '#abb2bf',
    background: '#282c34'
  },

  '.hljs, .hljs-subst, .hljs-tag .hljs-title, .lisp .hljs-title, .clojure .hljs-built_in, .nginx .hljs-title':
    {
      color: 'black'
    },

  '.hljs-string, .hljs-title, .hljs-constant, .hljs-parent, .hljs-tag .hljs-value, .hljs-rules .hljs-value, .hljs-rules .hljs-value .hljs-number, .hljs-preprocessor, .hljs-pragma, .haml .hljs-symbol, .ruby .hljs-symbol, .ruby .hljs-symbol .hljs-string, .hljs-aggregate, .hljs-template_tag, .django .hljs-variable, .smalltalk .hljs-class, .hljs-addition, .hljs-flow, .hljs-stream, .bash .hljs-variable, .apache .hljs-tag, .apache .hljs-cbracket, .tex .hljs-command, .tex .hljs-special, .erlang_repl .hljs-function_or_atom, .asciidoc .hljs-header, .markdown .hljs-header, .coffeescript .hljs-attribute':
    {
      color: '#800'
    },

  '.smartquote, .hljs-comment, .hljs-annotation, .hljs-template_comment, .diff .hljs-header, .hljs-chunk, .asciidoc .hljs-blockquote, .markdown .hljs-blockquote':
    {
      color: '#888'
    },

  '.hljs-number, .hljs-date, .hljs-regexp, .hljs-literal, .hljs-hexcolor, .smalltalk .hljs-symbol, .smalltalk .hljs-char, .go .hljs-constant, .hljs-change, .lasso .hljs-variable, .makefile .hljs-variable, .asciidoc .hljs-bullet, .markdown .hljs-bullet, .asciidoc .hljs-link_url, .markdown .hljs-link_url':
    {
      color: '#080'
    },

  '.hljs-label, .hljs-javadoc, .ruby .hljs-string, .hljs-decorator, .hljs-filter .hljs-argument, .hljs-localvars, .hljs-array, .hljs-attr_selector, .hljs-important, .hljs-pseudo, .hljs-pi, .haml .hljs-bullet, .hljs-doctype, .hljs-deletion, .hljs-envvar, .hljs-shebang, .apache .hljs-sqbracket, .nginx .hljs-built_in, .tex .hljs-formula, .erlang_repl .hljs-reserved, .hljs-prompt, .asciidoc .hljs-link_label, .markdown .hljs-link_label, .vhdl .hljs-attribute, .clojure .hljs-attribute, .asciidoc .hljs-attribute, .lasso .hljs-attribute, .coffeescript .hljs-property, .hljs-phony':
    {
      color: '#88F'
    },

  '.hljs-keyword, .hljs-id, .hljs-title, .hljs-built_in, .hljs-aggregate, .css .hljs-tag, .hljs-javadoctag, .hljs-phpdoc, .hljs-yardoctag, .smalltalk .hljs-class, .hljs-winutils, .bash .hljs-variable, .apache .hljs-tag, .go .hljs-typename, .tex .hljs-command, .asciidoc .hljs-strong, .markdown .hljs-strong, .hljs-request, .hljs-status':
    {
      fontWeight: 'bold'
    },

  '.asciidoc .hljs-emphasis, .markdown .hljs-emphasis': {
    fontStyle: 'italic'
  },

  '.nginx .hljs-built_in': {
    fontWeight: 'normal'
  },

  '.coffeescript .javascript, .javascript .xml, .lasso .markup, .tex .hljs-formula, .xml .javascript, .xml .vbscript, .xml .css, .xml .hljs-cdata':
    {
      opacity: '0.5'
    }
  // wordBreak: 'break-word',
  // fontSize: '$lg',
  // minWidth: '100%',
  // 'h2, h3, h4, h5, h6': {
  //   fontWeight: '$extrabold',
  //   lineHeight: '$md',
  //   letterSpacing: '$wide'
  // },
  // 'h3, h4, h5, h6': {
  //   color: '$gray8'
  // },
  // h2: {
  //   fontSize: '$4xl',
  //   marginBottom: '$18',
  //   fontWeight: '$thin'
  // },
  // h3: { fontSize: '$3xl' },
  // h4: { fontSize: '$2xl' },
  // h5: { fontSize: '$xl' },
  // h6: { fontSize: '$md' },
  // p: {
  //   marginBottom: '$10'
  // },
  // a: {
  //   display: 'inline-block',
  //   position: 'relative',
  //   outline: 'none',
  //   transition: 'color 250ms 33ms cubic-bezier(0.19, 1, 0.22, 1)',
  //   '&::before': {
  //     content: "''",
  //     display: 'block',
  //     height: '0.5rem',
  //     position: 'absolute',
  //     top: '50%',
  //     right: '-0.15rem',
  //     left: '-0.1rem',
  //     zIndex: '-1',
  //     backgroundColor: 'hsl(223, 75%, 92%)',
  //     transform: 'translateY(0%) rotateZ(-3deg)',
  //     transition:
  //       'background-color var(250ms 33ms cubic-bezier(0.19, 1, 0.22, 1)), transform var(250ms 33ms cubic-bezier(0.19, 1, 0.22, 1))'
  //   },
  //   '&:hover, &:focus': {
  //     color: 'white',
  //     '&::before': {
  //       backgroundColor: '$primary',
  //       transform: 'translateY(-50%) rotateZ(-1deg) scaleY(2)'
  //     }
  //   }
  // },
  // '.heading-number': {
  //   fontFamily: '$mono'
  // },
  // figure: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   my: '$10',
  //   img: {
  //     borderRadius: '$xs',
  //     display: 'block',
  //     margin: '10px auto',
  //     OObjectFit: 'contain',
  //     objectFit: 'contain',
  //     boxShadow: '$md'
  //   }
  // },
  // '.qrcode-box': {
  //   fontFamily: '$sans',
  //   borderRadius: '$xs',
  //   display: 'flex',
  //   justifyContent: 'space-between',
  //   marginTop: '1rem',
  //   marginBottom: '1rem',
  //   padding: '1rem',
  //   color: '#718096',
  //   backgroundColor: '#f6f6f6',
  //   border: '1px solid #efefef',
  //   p: {
  //     margin: '0'
  //   }
  // },
  // blockquote: {
  //   '.qrcode-box': {
  //     backgroundColor: 'transparent',
  //     border: '1px solid #e3e3e3'
  //   }
  // },
  // '.qrcode-text': {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'space-around',
  //   wordBreak: 'break-all',
  //   fontSize: '.875rem',
  //   lineHeight: '1$1',
  //   width: 'calc(100% - 96px)',
  //   color: '#718096'
  // },
  // '.qrcode-img': {
  //   width: '$40',
  //   height: '$40',
  //   marginLeft: '4px',
  //   flexShrink: '0'
  // },

  // '.svg-markmap-box': {
  //   minHeight: '20rem',
  //   width: '100%'
  // },
  // '.footnote-backref': {
  //   display: 'none'
  // },
  // '.footnotes-title': {
  //   marginBottom: '1rem',
  //   fontSize: '1.125rem',
  //   lineHeight: '1.75rem',
  //   fontWeight: '500'
  // },
  // '.footnotes': {
  //   fontSize: '.875rem',
  //   lineHeight: '1$1'
  // },
  // '.footnote-item': {
  //   marginTop: '$1',
  //   marginBottom: '$1',
  //   display: 'flex',
  //   p: {
  //     margin: '0',
  //     padding: '0',
  //     lineHeight: '25px'
  //   }
  // },
  // '.footnote-link': {
  //   borderBottomWidth: '1px',
  //   borderBottomColor: '#6b7280',
  //   borderBottomStyle: 'dashed'
  // },
  // '.footnote-num': {
  //   width: '3$xs',
  //   flexShrink: '0',
  //   verticalAlign: 'middle',
  //   fontFamily:
  //     'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
  //   fontSize: '13px',
  //   opacity: '.7',
  //   lineHeight: '25px'
  // },
  // img: {
  //   maxWidth: '100%'
  // },
  // '.qrcode-img img': {
  //   margin: 'auto'
  // },
  // ol: {
  //   listStyle: 'decimal'
  // },
  // ul: {
  //   listStyle: 'circle'
  // },
  // '.square': {
  //   backgroundImage:
  //     'linear-gradient(90deg,rgba(50,0,0,.07) 3%,rgba(0,0,0,0) 3%),linear-gradient(360deg,rgba(50,0,0,.07) 3%,rgba(0,0,0,0) 3%)',
  //   backgroundSize: '20px 20px',
  //   backgroundPosition: 'center center'
  // },
  // hr: {
  //   my: '$10',
  //   border: 'none',
  //   height: '$1',
  //   backgroundColor: '$gray4',
  //   transform: 'rotateZ(-2deg)'
  // },
})
