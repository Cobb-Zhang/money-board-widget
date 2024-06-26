import Widget from 'flarum/extensions/afrux-forum-widgets-core/common/components/Widget';
import app from 'flarum/common/app';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
export default class MyWidget extends Widget {

  oninit(vnode) {
    super.oninit(vnode);
    this.maxLoadCount = app.forum.attribute("leaderboardMaxLoadCount") || 10;
    this.moneyBoardList ??= [];
    this.totalLoadCount = 0;
    this.moreResults = false;

    this.attrs.state.isLoading ??= true;
    this.attrs.state.hasLoaded ??= false;
    this.loadResults(0, this.initloadCount);
  }

  oncreate(vnode) {
    super.oncreate(vnode);
    if (!this.attrs.state.hasLoaded) {
      setTimeout(this.load.bind(this), this.loadWithInitialResponse ? 0 : 800);
    }
  }

  className() {
    return 'cobbz-leaderboardWidget';
  }

  icon() {
    // Widget icon.
    return 'fas fa-sort-amount-up';
  }

  title() {
    // Widget title.
    // Can return empty for a titleless widget.
    return app.translator.trans('cobbz-money-board-widget.forum.leaderboard-name');
  }

  description() {
    return '';
  }

  content() {
    // 如果没有加载出来显示这个
    if (this.attrs.state.isLoading) {
      return <LoadingIndicator />;
    }
    let rankID = 0;
    return (
      <div className="cobbz-money-board-widget">
        <div class="MoneyLeaderboardContainer">
          <div class="MoneyLeaderboardListTitle">
            {app.translator.trans("cobbz-money-board-widget.forum.leaderboard-list-title")}
          </div>
          {this.additionalInfo && this.additionalInfo.length > 0 && (
            <p class="MoneyLeaderboardListAdditionalInformation">{this.additionalInfo}</p>
          )}

          <div class="MoneyLeaderboardListHeader">
            <div class="MoneyLeaderboardListHeaderRank">{app.translator.trans("cobbz-money-board-widget.forum.leaderboard-list-rank")}</div>
            <div class="MoneyLeaderboardListHeaderUser">{app.translator.trans("cobbz-money-board-widget.forum.leaderboard-list-user")}</div>
            <div class="MoneyLeaderboardListHeaderMoney">{app.translator.trans("cobbz-money-board-widget.forum.leaderboard-list-money")}</div>
          </div>

          <ul class="MoneyLeaderboardList">
            {this.moneyBoardList.map((leaderboardListItem) => {
              rankID++;

              return (
                <li class="MoneyLeaderboardListItems">
                  {MoneyLeaderboardListItem.component({ leaderboardListItem, rankID })}
                </li>
              );
            })}
          </ul>

          {!this.loading && this.moneyLeaderboardList.length === 0 && (
            <div>
              <div style="font-size:1.4em;color: var(--muted-more-color);text-align: center;height: 300px;line-height: 100px;">{app.translator.trans("cobbz-money-board-widget.forum.leaderboard-list-empty")}</div>
            </div>
          )}

          {!loading && this.hasMoreResults() && (
            <div style="text-align:center;padding:20px">
              <Button className={'Button Button--primary'} disabled={this.loading} loading={this.loading} onclick={() => this.loadMore()}>
                {app.translator.trans('cobbz-money-board-widget.forum.leaderboard-load-more')}
              </Button>
            </div>
          )}

          {loading && <div className="MoneyLeaderboard-loadMore">{loading}</div>}
        </div>

      </div>
    );
  }

  parseResults(results) {
    this.moreResults = !!results.payload.links && !!results.payload.links.next;
    [].push.apply(this.moneyBoardList, results);
    this.attrs.state.isLoading = false;
    m.redraw();
    return results;
  }

  loadResults(offset = 0, loadCount = 20) {
    if (this.maxLoadCount === this.totalLoadCount) {
      return;
    }

    let limit = loadCount;

    if (this.maxLoadCount < this.totalLoadCount + loadCount) {
      limit = this.maxLoadCount - this.totalLoadCount;
      this.totalLoadCount = this.maxLoadCount;
    }

    this.totalLoadCount += loadCount;

    return app.store
      .find("moneyboard", {
        page: {
          offset,
          limit
        },
      })
      .catch(() => { })
      .then(this.parseResults.bind(this));
  }
}