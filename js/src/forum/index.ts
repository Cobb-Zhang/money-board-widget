import app from 'flarum/forum/app';
import registerWidget from '../common/registerWidget';
app.initializers.add('cobbz/money-board-widget', () => {
  console.log('[cobbz/money-board-widget] Hello, forum!');
  registerWidget(app);
});
