<?php

/**
 * WeEngine Document System
 *
 * (c) We7Team 2019 <https://www.w7.cc>
 *
 * This is not a free software
 * Using it under the license terms
 * visited https://www.w7.cc for more details
 */

irouter()->group(['prefix'=>'/client'], function (\W7\Core\Route\Route $route) {
	$route->get('/test/index', 'Client\TestController@index');

	$route->get('/document/detail', 'Client\DocumentController@detail');
	$route->get('/document/search', 'Client\DocumentController@search');
});