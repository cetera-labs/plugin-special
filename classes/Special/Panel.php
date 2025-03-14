<?php
namespace Special;

class Panel extends \Cetera\Widget\Templateable
{
    const COOKIE_KEY = 'widget-special-enable';

    protected $_params = array(
		'css' => '/cms/plugins/special/css/special.css',
        'url_normal' => false,
        'cookie_mode' => false
    );

    protected function init()
    {
        if ($this->isCookieMode()) {
            $this->application->addScript('/cms/plugins/special/js/jquery.cookie.js');
            $this->application->addScript('/cms/plugins/special/js/cookie.mode.js');
        }
        if ($this->isSpecialMode()) {
            $this->application->addCss($this->getParam('css'));
            $this->application->addScript('/cms/plugins/special/js/special.js');
        }
    }

	public function isSpecialMode()
	{
        if (isset($_COOKIE[self::COOKIE_KEY]) && $this->isCookieMode()) {
            return $_COOKIE[self::COOKIE_KEY] === 'Y';
        }
        if (strstr(getenv('HTTP_HOST'),'special.')) {
           return true;
        }
        else {
            return false;
        }
    }

    public function urlNormalMode() {
        return $this->getParam('url_normal').$_SERVER['REQUEST_URI'];
    }

    public function isCookieMode() {
        return $this->getParam('cookie_mode');
    }

	public function urlSpecialMode()
	{
        if ($this->isSpecialMode()) {
            return '//'.getenv('SERVER_NAME').$_SERVER['REQUEST_URI'];
        }
        else {
            return '//special.'.getenv('SERVER_NAME').$_SERVER['REQUEST_URI'];
        }
    }
}
