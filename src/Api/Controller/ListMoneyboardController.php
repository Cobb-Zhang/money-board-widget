<?php

namespace Cobbz\MoneyBoardWidget\Api\Controller;

use Flarum\Api\Serializer\UserSerializer;
use Flarum\User\User;

use Flarum\Api\Controller\AbstractListController;
use Flarum\Http\RequestUtil;
use Flarum\Http\UrlGenerator;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class ListMoneyboardController extends AbstractListController
{
    /**
     * {@inheritdoc}
     */
    public $serializer = UserSerializer::class;

    /**
     * @var UrlGenerator
     */
    protected $url;

    /**
     * @param UrlGenerator $url
     */
    public function __construct(UrlGenerator $url)
    {
        $this->url = $url;
    }

    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        // See https://docs.flarum.org/extend/api#api-endpoints for more information.

        $params = $request->getQueryParams();
        $limit = $this->extractLimit($request);
        $offset = $this->extractOffset($request);

        $moneyboardResult = User::skip($offset)->take($limit + 1)->orderBy('money', 'desc')->get();
        $hasMoreResults = $limit > 0 && $moneyboardResult->count() > $limit;

        if ($hasMoreResults) {
            $moneyboardResult->pop();
        }
        $document->addPaginationLinks(
            $this->url->to('api')->route('moneyboard.get'),
            $params,
            $offset,
            $limit,
            $hasMoreResults ? null : 0
        );

        return $moneyboardResult;
    }
}
