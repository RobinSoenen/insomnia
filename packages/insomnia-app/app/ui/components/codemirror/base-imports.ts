import 'codemirror/mode/clike/clike';
import 'codemirror/mode/clojure/clojure';
import 'codemirror/mode/css/css';
import 'codemirror/mode/go/go';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/http/http';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/mllike/mllike';
import 'codemirror/mode/php/php';
import 'codemirror/mode/powershell/powershell';
import 'codemirror/mode/python/python';
import 'codemirror/mode/ruby/ruby';
import 'codemirror/mode/shell/shell';
import 'codemirror/mode/swift/swift';
import 'codemirror/mode/yaml/yaml';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/dialog/dialog';
import 'codemirror/addon/dialog/dialog.css';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/comment-fold';
import 'codemirror/addon/fold/indent-fold';
import 'codemirror/addon/fold/xml-fold';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/search/search';
import 'codemirror/addon/search/searchcursor';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/search/matchesonscrollbar';
import 'codemirror/addon/search/matchesonscrollbar.css';
import 'codemirror/addon/selection/active-line';
import 'codemirror/addon/selection/selection-pointer';
import 'codemirror/addon/display/placeholder';
import 'codemirror/addon/lint/lint';

/**/
/**
 * Unfortunately, the CodeMirror addon for linting makes use of a pattern whereby linting dependencies are required to be attached to `window` (i.e. `global`) at runtime.
 * For that reason, if you search our codebase, you will not find anywhere where these imports are used.
 */
/**/
// for the code that uses this json parser, see https://github.com/codemirror/CodeMirror/blob/master/addon/lint/json-lint.js
import * as jsonlint from 'jsonlint';
global.jsonlint = jsonlint;
import 'codemirror/addon/lint/json-lint';

// for the code that uses this yaml parser, see https://github.com/codemirror/CodeMirror/blob/master/addon/lint/yaml-lint.js
import * as jsyaml from 'js-yaml';
global.jsyaml = jsyaml;
import 'codemirror/addon/lint/yaml-lint';
/**/
import 'codemirror/addon/lint/lint.css';
import 'codemirror/keymap/vim';
import 'codemirror/keymap/emacs';
import 'codemirror/keymap/sublime';
import 'codemirror-graphql/hint';
import 'codemirror-graphql/lint';
import 'codemirror-graphql/info';
import 'codemirror-graphql/jump';
import 'codemirror-graphql/mode';
import 'codemirror-graphql/variables/lint';
import 'codemirror-graphql/variables/mode';
import './modes/nunjucks';
import './modes/curl';
import './modes/openapi';
import './lint/openapi';
import './lint/javascript-async-lint';
import './extensions/autocomplete';
import './extensions/clickable';
import './extensions/nunjucks-tags';
// CSS
import 'codemirror/lib/codemirror.css';
import '../../css/editor/index.less';
