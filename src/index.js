import app from './app';
import '@babel/polyfill';

app.listen(app.get('port'), () => {
	console.log('SERVER ON PORT: ', app.get('port'));
});