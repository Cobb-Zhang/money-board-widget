import app from 'flarum/admin/app';
import registerWidget from '../common/registerWidget';
app.initializers.add('cobbz/money-board-widget', () => {
  registerWidget(app);
  app.extensionData
    .for('cobbz-money-board-widget').registerSetting({
      setting: 'cobbz-money-board-widget.leaderboardMaxLoadCount',
      label: app.translator.trans('cobbz-money-board-widget.admin.settings.leaderboard-max-load-count'),
      placeholder: 5,
      min: 3,
      type: 'number',
    })
});
