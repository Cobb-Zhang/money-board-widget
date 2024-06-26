<?php

namespace Cobbz\MoneyBoardWidget\Api\Controller;

use Flarum\Frontend\Document;
use Psr\Http\Message\ServerRequestInterface;

class MoneyBoardController{
    public function __invoke(Document $document, ServerRequestInterface $request){
        return $document;
    }
}