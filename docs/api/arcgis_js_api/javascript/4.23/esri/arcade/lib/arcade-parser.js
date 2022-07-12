// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ./comment-handler ./parser ./tokenizer ./syntax ./token ./nodes".split(" "),function(a,p,q,r,t,l,b){a.Syntax=t.Syntax;a.TokenName=l.TokenName;Object.defineProperty(a,"TokenType",{enumerable:!0,get:()=>l.TokenType});a.ArrayExpression=b.ArrayExpression;a.AssignmentExpression=b.AssignmentExpression;a.AssignmentOperators=b.AssignmentOperators;a.BinaryExpression=b.BinaryExpression;a.BinaryOperators=b.BinaryOperators;a.BlockStatement=b.BlockStatement;a.BreakStatement=b.BreakStatement;a.CallExpression=
b.CallExpression;a.Comment=b.Comment;a.ComputedMemberExpression=b.ComputedMemberExpression;a.ContinueStatement=b.ContinueStatement;a.EmptyStatement=b.EmptyStatement;a.ExpressionStatement=b.ExpressionStatement;a.ForInStatement=b.ForInStatement;a.ForStatement=b.ForStatement;a.FunctionDeclaration=b.FunctionDeclaration;a.Identifier=b.Identifier;a.IfStatement=b.IfStatement;a.Literal=b.Literal;a.LogicalOperators=b.LogicalOperators;a.ObjectExpression=b.ObjectExpression;a.Program=b.Program;a.Property=b.Property;
a.ReturnStatement=b.ReturnStatement;a.StaticMemberExpression=b.StaticMemberExpression;a.TemplateElement=b.TemplateElement;a.TemplateLiteral=b.TemplateLiteral;a.UnaryExpression=b.UnaryExpression;a.UnaryOperators=b.UnaryOperators;a.UpdateExpression=b.UpdateExpression;a.UpdateOperators=b.UpdateOperators;a.VariableDeclaration=b.VariableDeclaration;a.VariableDeclarator=b.VariableDeclarator;a.parse=function(d,c,g){let e=null;const f=(h,m)=>{g&&g(h,m);e&&e.visit(h,m)};let n="function"===typeof g?f:void 0,
k=!1;if(c){k="boolean"===typeof c.comment&&c.comment;const h="boolean"===typeof c.attachComment&&c.attachComment;if(k||h)e=new p.CommentHandler,e.attach=h,c.comment=!0,n=f}d=new q.Parser(d,c,n);c=d.parseScript();k&&e&&(c.comments=e.comments);d.config.tokens&&(c.tokens=d.tokens);d.config.tolerant&&(c.errors=d.errorHandler.errors);return c};a.tokenize=function(d,c,g){d=new r.Tokenizer(d,c);c=[];let e=void 0;try{for(;;){let f=d.getNextToken();if(!f)break;g&&(f=g(f));c.push(f)}}catch(f){d.errorHandler.tolerate(f)}d.errorHandler.tolerant&&
(e=d.errors());return{tokens:c,errors:e}};a.version="4.0.0-dev";Object.defineProperty(a,"__esModule",{value:!0})});