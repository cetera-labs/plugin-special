<?php
namespace Special;

class Panel extends \Cetera\Widget\Templateable
{

    protected $_params = array(
		'css' => '/plugins/special/css/special.css',
        'url_normal' => false,
    ); 
	
	//public $coupon_error = null;
	protected function init()
	{
         if ($this -> isSpecialMode()) {
            $this->application->addCss($this->getParam('css'));
            $this->application->addScript('/plugins/special/js/special.js');
         }
	}		

	public function isSpecialMode()
	{
        if (strstr(getenv('SERVER_NAME'),'special.')) {
           return true;
        }
        else {
            return false;
        }
    }
    
    public function urlNormalMode() {
        return $this->getParam('url_normal').$_SERVER['REQUEST_URI'];
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
