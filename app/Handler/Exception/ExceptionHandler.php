<?php

namespace W7\App\Handler\Exception;

use Psr\Http\Message\ResponseInterface;
use W7\App;
use W7\Core\Exception\ResponseExceptionAbstract;
use W7\Core\Exception\RouteNotAllowException;
use W7\Core\Exception\RouteNotFoundException;
use W7\Core\View\View;
use W7\Core\Exception\Handler\ExceptionHandler as ExceptionHandlerAbstract;

class ExceptionHandler extends ExceptionHandlerAbstract {
	public function handle(ResponseExceptionAbstract $e) : ResponseInterface {
		if ($e instanceof RouteNotFoundException || $e instanceof RouteNotAllowException) {
			return App::getApp()->getContext()->getResponse()->html(iloader()->singleton(View::class)->render('index'));
		}
		return parent::handle($e); // TODO: Change the autogenerated stub
	}
}