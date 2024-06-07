import app from 'flarum/admin/app';
import registerWidget from '../common/registerWidget';
app.initializers.add('cobbz/money-board-widget', () => {
  console.log('[cobbz/money-board-widget] Hello, admin!');
  registerWidget(app);
});
