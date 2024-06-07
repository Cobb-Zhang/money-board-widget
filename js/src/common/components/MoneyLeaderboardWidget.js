import Widget from 'flarum/extensions/afrux-forum-widgets-core/common/components/Widget';
export default class MyWidget  extends Widget {
  className() {
    return 'MyWidget';
  }

  icon() {
    // Widget icon.
    return 'fas fa-cirlce';
  }

  title() {
    return "";
  }

  description() {
    return '';
  }

  content() {
    return (
      <div className="Afrux-OnlineUsersWidget-users">
        Hello world!
      </div>
    );
  }
}