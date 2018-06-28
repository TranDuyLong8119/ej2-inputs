
import { browser, element, by , ElementArrayFinder,ElementFinder, Key, WebElement } from "@syncfusion/ej2-base/e2e/index";
import { setTimeout } from "timers";
let theme = ['material'];
let themeChanged = ['material', 'fabric', 'bootstrap', 'highcontrast'];
describe('CSS TextBox rendering', function () {
    it('CSS TextBox rendering - initial state', function () {
        browser.load('/demos/input/css_component/default-input.html');
        for( let i = 0 ; i < themeChanged.length; i++ ) {
            let fileName: string = '../../../styles/'+ themeChanged[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(400);
                browser.compareScreen(element(by.className('control-panel-small')), 'default_small_'+themeChanged[i]);
                browser.compareScreen(element(by.className('control-panel-normal')), 'default_input_normal_'+themeChanged[i]);
                browser.compareScreen(element(by.className('control-panel-bigger')), 'default_input_bigger_'+themeChanged[i]);
                browser.compareScreen(element(by.className('control-panel-small-bigger')), 'default_input_small_bigger_'+themeChanged[i]);
            });
        }
    });
});

describe('CSS TextBox rendering with Focus State', function () {
    for( let i = 0 ; i < theme.length; i++ ) {
        it('Small TextBox rendering', function () {
            browser.load('/demos/input/css_component/default-input.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                let eleLoc: ElementFinder = element(by.css('.control-panel-small')).all(by.css('input')).get(0);
                eleLoc.sendKeys(Key.TAB).then(function () {
                    browser.sleep(400);
                    browser.compareScreen(element(by.className('control-panel-small')), 'default_input_small_focus_'+theme[i]);
                });
                let eleLoc1: ElementFinder = element(by.css('.control-panel-small')).all(by.css('.e-input-group input')).get(0);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-small')), 'default_input_small_click_'+theme[i]);
            });
        });

        it('Normal TextBox rendering', function () {
            browser.load('/demos/input/css_component/default-input.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                let eleLoc: ElementFinder = element(by.css('.control-panel-normal')).all(by.css('input')).get(0);
                eleLoc.sendKeys(Key.TAB).then(function () {
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'default_input_normal_focus_'+theme[i]);
                });
                let eleLoc1: ElementFinder = element(by.css('.control-panel-normal')).all(by.css('.e-input-group input')).get(0);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-normal')), 'default_input_normal_click_'+theme[i]);
            });
        });

        it('Bigger TextBox rendering', function () {
            browser.load('/demos/input/css_component/default-input.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                let eleLoc: ElementFinder = element(by.css('.control-panel-bigger')).all(by.css('input')).get(0);
                eleLoc.sendKeys(Key.TAB).then(function () {
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'default_input_bigger_focus_'+theme[i]);
                });
                let eleLoc1: ElementFinder = element(by.css('.control-panel-bigger')).all(by.css('.e-input-group input')).get(0);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-bigger')), 'default_input_bigger_click_'+theme[i]);
            });
        });

        it('Bigger-Small TextBox rendering', function () {
            browser.load('/demos/input/css_component/default-input.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                let eleLoc: ElementFinder = element(by.css('.control-panel-small-bigger')).all(by.css('input')).get(0);
                eleLoc.sendKeys(Key.TAB).then(function () {
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'default_input_small_bigger_focus_'+theme[i]);
                });
                let eleLoc1: ElementFinder = element(by.css('.control-panel-small-bigger')).all(by.css('.e-input-group input')).get(0);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-small-bigger')), 'default_input_small_bigger_click_'+theme[i]);
            });
        });
    }
});


describe('CSS TextBox rendering with Focus State', function () {
    for( let i = 0 ; i < theme.length; i++ ) {
        it('Small TextBox rendering', function () {
            browser.load('/demos/input/css_component/default-input.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                let eleLoc: ElementFinder = element(by.css('.control-panel-small')).all(by.css('input')).get(0);
                eleLoc.sendKeys(Key.TAB).then(function () {
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-small')), 'default_input_small_focus_'+theme[i]);
                });
                let eleLoc1: ElementFinder = element(by.css('.control-panel-small')).all(by.css('.e-input-group input')).get(0);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-small')), 'default_input_small_click_'+theme[i]);
            });
        });

        it('Normal TextBox rendering', function () {
            browser.load('/demos/input/css_component/default-input.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"');";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                let eleLoc: ElementFinder = element(by.css('.control-panel-normal')).all(by.css('input')).get(0);
                eleLoc.sendKeys(Key.TAB).then(function () {
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'default_input_normal_focus_'+theme[i]);
                });
                let eleLoc1: ElementFinder = element(by.css('.control-panel-normal')).all(by.css('.e-input-group input')).get(0);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-normal')), 'default_input_normal_click_'+theme[i]);
            });
        });

        it('Bigger TextBox rendering', function () {
            browser.load('/demos/input/css_component/default-input.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                let eleLoc: ElementFinder = element(by.css('.control-panel-bigger')).all(by.css('input')).get(0);
                eleLoc.sendKeys(Key.TAB).then(function () {
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'default_input_bigger_focus_'+theme[i]);
                });
                let eleLoc1: ElementFinder = element(by.css('.control-panel-bigger')).all(by.css('.e-input-group input')).get(0);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-bigger')), 'default_input_bigger_click_'+theme[i]);
            });
        });

        it('Bigger-Small TextBox rendering', function () {
            browser.load('/demos/input/css_component/default-input.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                let eleLoc: ElementFinder = element(by.css('.control-panel-small-bigger')).all(by.css('input')).get(0);
                eleLoc.sendKeys(Key.TAB).then(function () {
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'default_input_small_bigger_focus_'+theme[i]);
                });
                let eleLoc1: ElementFinder = element(by.css('.control-panel-small-bigger')).all(by.css('.e-input-group input')).get(0);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-small-bigger')), 'default_input_small_bigger_click_'+theme[i]);
            });
        });
    }
});

describe('CSS Floating Label TextBox rendering', function () {
    for( let i = 0 ; i < themeChanged.length; i++ ) {
        it('Small Floating Label TextBox rendering', function () {
            browser.load('/demos/input/css_component/floating-input.html');
            let fileName: string = '../../../styles/'+ themeChanged[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-small')), 'floating_input_small_'+themeChanged[i]);
            });
        });

        it('Normal Floating Label TextBox rendering', function () {
            browser.load('/demos/input/css_component/floating-input.html');
            let fileName: string = '../../../styles/'+ themeChanged[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-normal')), 'floating_input_normal_'+themeChanged[i]);
            });
        });

        it('Bigger Floating Label TextBox rendering', function () {
            browser.load('/demos/input/css_component/floating-input.html');
            let fileName: string = '../../../styles/'+ themeChanged[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-bigger')), 'floating_input_bigger_'+themeChanged[i]);
            });
        });

        it('Bigger-Small Floating Label TextBox rendering', function () {
            browser.load('/demos/input/css_component/floating-input.html');
            let fileName: string = '../../../styles/'+ themeChanged[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-small-bigger')), 'floating_input_small_bigger_'+themeChanged[i]);
            });
        });
    }
});

describe('CSS Floating Label TextBox with Focus State', function () {
    for( let i = 0 ; i < theme.length; i++ ) {
        it('Small Floating Label rendering', function () {
            browser.load('/demos/input/css_component/floating-input.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                let eleLoc1: ElementFinder = element(by.css('.control-panel-small')).all(by.css('.e-float-input input')).get(0);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-small')), 'floating_input_small_focus_'+theme[i]);
            });
        });

        it('Normal Floating Label rendering', function () {
            browser.load('/demos/input/css_component/floating-input.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                let eleLoc: ElementFinder = element(by.css('.control-panel-normal')).all(by.css('.e-float-input input')).get(0);
                eleLoc.sendKeys(Key.TAB).then(function () {
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'float_input_normal_focus_'+theme[i]);
                });
                let eleLoc1: ElementFinder = element(by.css('.control-panel-normal')).all(by.css('.e-float-input input')).get(1);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-normal')), 'floating_input_normal_focus_'+theme[i]);
            });
        });

        it('Bigger Floating Label rendering', function () {
            browser.load('/demos/input/css_component/floating-input.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                let eleLoc: ElementFinder = element(by.css('.control-panel-bigger')).all(by.css('.e-float-input input')).get(1);
                eleLoc.sendKeys(Key.TAB).then(function () {
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'float_input_bigger_focus_'+theme[i]);
                });
                let eleLoc1: ElementFinder = element(by.css('.control-panel-bigger')).all(by.css('.e-float-input input')).get(2);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-bigger')), 'floating_input_bigger_focus_'+theme[i]);
            });      
        });

        it('Bigger-Small Floating Label rendering', function () {
            browser.load('/demos/input/css_component/floating-input.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                let eleLoc: ElementFinder = element(by.css('.control-panel-small-bigger')).all(by.css('.e-float-input input')).get(2);
                eleLoc.sendKeys(Key.TAB).then(function () {
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'float_input_small_bigger_focus_'+theme[i]);
                });
                let eleLoc1: ElementFinder = element(by.css('.control-panel-small-bigger')).all(by.css('.e-float-input input')).get(3);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-small-bigger')), 'floating_input_small_bigger_focus_'+theme[i]);
            });
        });
    }
});

describe('CSS TextBox rendering with Icon', function () {
    for( let i = 0 ; i < themeChanged.length; i++ ) {
        it('Small TextBox with icon rendering', function () {
            browser.load('/demos/input/css_component/default-input-icons.html');
            let fileName: string = '../../../styles/'+ themeChanged[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-small')), 'default_input_icon_small_'+themeChanged[i]);
            });
        });

        it('Normal TextBox with icon rendering', function () {
            browser.load('/demos/input/css_component/default-input-icons.html');
            let fileName: string = '../../../styles/'+ themeChanged[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-normal')), 'default_input_icon_normal_'+themeChanged[i]);
            });
        });

        it('Bigger TextBox with icon rendering', function () {
            browser.load('/demos/input/css_component/default-input-icons.html');
            let fileName: string = '../../../styles/'+ themeChanged[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-bigger')), 'default_input_icon_bigger_'+themeChanged[i]);
            });
        });

        it('Bigger-Small TextBox with icon rendering', function () {
            browser.load('/demos/input/css_component/default-input-icons.html');
            let fileName: string = '../../../styles/'+ themeChanged[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-small-bigger')), 'default_input_icon_small_bigger_'+themeChanged[i]);
            });  
        });
    }
});

describe('CSS TextBox rendering with Icon & Focus ', function () {
    for( let i = 0 ; i < theme.length; i++ ) {
        it('Small TextBox with icon rendering', function () {
            browser.load('/demos/input/css_component/default-input-icons.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                let eleLoc1: ElementFinder = element(by.css('.control-panel-small')).all(by.css('.e-input-group input')).get(0);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-small')), 'default_input_icon_small_click_'+theme[i]);
            });  
        });

        it('Normal TextBox with icon rendering', function () {
            browser.load('/demos/input/css_component/default-input-icons.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                let eleLoc: ElementFinder = element(by.css('.control-panel-normal')).all(by.css('.e-input-group input')).get(0);
                eleLoc.sendKeys(Key.TAB).then(function () {
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'default_input_icon_normal_focus_'+theme[i]);
                });
                let eleLoc1: ElementFinder = element(by.css('.control-panel-normal')).all(by.css('.e-input-group input')).get(1);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-normal')), 'default_input_icon_normal_click_'+theme[i]);
            });
        });

        it('Bigger TextBox with icon rendering', function () {
            browser.load('/demos/input/css_component/default-input-icons.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                let eleLoc: ElementFinder = element(by.css('.control-panel-bigger')).all(by.css('.e-input-group input')).get(1);
                eleLoc.sendKeys(Key.TAB).then(function () {
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'default_input_icon_bigger_focus_'+theme[i]);
                });
                let eleLoc1: ElementFinder = element(by.css('.control-panel-bigger')).all(by.css('.e-input-group input')).get(2);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-bigger')), 'default_input_icon_bigger_click_'+theme[i]);
            });   
        });

        it('Bigger-Small TextBox with icon rendering', function () {
            browser.load('/demos/input/css_component/default-input-icons.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                let eleLoc: ElementFinder = element(by.css('.control-panel-small-bigger')).all(by.css('.e-input-group input')).get(2);
                eleLoc.sendKeys(Key.TAB).then(function () {
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'default_input_icon_small_bigger_focus_'+theme[i]);
                });
                let eleLoc1: ElementFinder = element(by.css('.control-panel-small-bigger')).all(by.css('.e-input-group input')).get(3);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-small-bigger')), 'default_input_icon_small_bigger_click_'+theme[i]);
            });
        });
    }
});

describe('CSS Floating Label TextBox rendering with Icon', function () {
    for( let i = 0 ; i < themeChanged.length; i++ ) {
        it('Small Floating Label TextBox with icon rendering', function () {
            browser.load('/demos/input/css_component/floating-input-icons.html');
            let fileName: string = '../../../styles/'+ themeChanged[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-small')), 'floating_input_icon_small_'+themeChanged[i]);
            });
        });

        it('Normal Floating Label TextBox with icon rendering', function () {
            browser.load('/demos/input/css_component/floating-input-icons.html');
            let fileName: string = '../../../styles/'+ themeChanged[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-normal')), 'floating_input_icon_normal_'+themeChanged[i]);
            });
        });

        it('Bigger Floating Label TextBox with icon rendering', function () {
            browser.load('/demos/input/css_component/floating-input-icons.html');
            let fileName: string = '../../../styles/'+ themeChanged[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-bigger')), 'floating_input_icon_bigger_'+themeChanged[i]);
            });
        });

        it('Bigger-Small Floating Label TextBox with icon rendering', function () {
            browser.load('/demos/input/css_component/floating-input-icons.html');
            let fileName: string = '../../../styles/'+ themeChanged[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-small-bigger')), 'floating_input_icon_small_bigger_'+themeChanged[i]);
            });
        });
    }
});

describe('CSS Float Label TextBox rendering with Icon & Focus ', function () {
    for( let i = 0 ; i < theme.length; i++ ) {
        it('Small Float Label TextBox with icon rendering', function () {
            browser.load('/demos/input/css_component/floating-input-icons.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                let eleLoc1: ElementFinder = element(by.css('.control-panel-small')).all(by.css('.e-float-input input')).get(0);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-small')), 'floating_input_icon_small_click_'+theme[i]);
            });
        });

        it('Normal Float Label TextBox with icon rendering', function () {
            browser.load('/demos/input/css_component/floating-input-icons.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                let eleLoc: ElementFinder = element(by.css('.control-panel-normal')).all(by.css('.e-float-input input')).get(0);
                eleLoc.sendKeys(Key.TAB).then(function () {
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'float_input_icon_normal_focus_'+theme[i]);
                });
                let eleLoc1: ElementFinder = element(by.css('.control-panel-normal')).all(by.css('.e-float-input input')).get(1);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-normal')), 'floating_input_icon_normal_click_'+theme[i]);
            });
        });

        it('Bigger Float Label TextBox with icon rendering', function () {
            browser.load('/demos/input/css_component/floating-input-icons.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                let eleLoc: ElementFinder = element(by.css('.control-panel-bigger')).all(by.css('.e-float-input input')).get(1);
                eleLoc.sendKeys(Key.TAB).then(function () {
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'float_input_icon_bigger_focus_'+theme[i]);
                });
                let eleLoc1: ElementFinder = element(by.css('.control-panel-bigger')).all(by.css('.e-float-input input')).get(2);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-bigger')), 'floating_input_icon_bigger_click_'+theme[i]);
            });
        });

        it('Bigger-Small Float Label TextBox with icon rendering', function () {
            browser.load('/demos/input/css_component/floating-input-icons.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                let eleLoc: ElementFinder = element(by.css('.control-panel-small-bigger')).all(by.css('.e-float-input input')).get(2);
                eleLoc.sendKeys(Key.TAB).then(function () {
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'float_input_icon_small_bigger_focus_'+theme[i]);
                });
                let eleLoc1: ElementFinder = element(by.css('.control-panel-small-bigger')).all(by.css('.e-float-input input')).get(3);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-small-bigger')), 'floating_input_icon_small_bigger_click_'+theme[i]);
            });
        });
    }
});

describe('CSS TextBox with different states rendering', function () {
    for( let i = 0 ; i < themeChanged.length; i++ ) {
        it('Small TextBox with states rendering', function () {
            browser.load('/demos/input/css_component/default-input-states.html');
            let fileName: string = '../../../styles/'+ themeChanged[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-small')), 'default_input_states_small_'+themeChanged[i]);
            });
        });

        it('Normal TextBox with states rendering', function () {
            browser.load('/demos/input/css_component/default-input-states.html');
            let fileName: string = '../../../styles/'+ themeChanged[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-normal')), 'default_input_states_normal_'+themeChanged[i]);
            });
        });

        it('Bigger TextBox with states rendering', function () {
            browser.load('/demos/input/css_component/default-input-states.html');
            let fileName: string = '../../../styles/'+ themeChanged[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-bigger')), 'default_input_states_bigger_'+themeChanged[i]);
            });
        });

        it('Bigger-Small TextBox with states rendering', function () {
            browser.load('/demos/input/css_component/default-input-states.html');
            let fileName: string = '../../../styles/'+ themeChanged[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-small-bigger')), 'default_input_states_small_bigger_'+themeChanged[i]);
            }); 
        });
    }
});

describe('CSS Floating Label TextBox with different states rendering', function () {
    for( let i = 0 ; i < themeChanged.length; i++ ) {
        it('Small Floating Label TextBox with disabled states rendering', function () {
            browser.load('/demos/input/css_component/floating-input-states.html');
            let fileName: string = '../../../styles/'+ themeChanged[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-small')), 'floating_input_states_small_'+themeChanged[i]);
            });
        });

        it('Normal Floating Label TextBox with disabled states rendering', function () {
            browser.load('/demos/input/css_component/floating-input-states.html');
            let fileName: string = '../../../styles/'+ themeChanged[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-normal')), 'floating_input_states_normal_'+themeChanged[i]);
            });    
        });

        it('Bigger Floating Label TextBox with disabled states rendering', function () {
            browser.load('/demos/input/css_component/floating-input-states.html');
            let fileName: string = '../../../styles/'+ themeChanged[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-bigger')), 'floating_input_states_bigger_'+themeChanged[i]);
            });
        });

        it('Bigger-Small Floating Label TextBox with disabled states rendering', function () {
            browser.load('/demos/input/css_component/floating-input-states.html');
            let fileName: string = '../../../styles/'+ themeChanged[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-small-bigger')), 'floating_input_states_small_bigger_'+themeChanged[i]);
            });  
        });

        it('Small Floating Label TextBox with RTL mode rendering', function () {
            browser.load('/demos/input/css_component/floating-input-states-02.html');
            let fileName: string = '../../../styles/'+ themeChanged[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-small')), 'floating_input_states_small-02_'+themeChanged[i]);
            });
        });

        it('Normal Floating Label TextBox with RTL mode rendering', function () {
            browser.load('/demos/input/css_component/floating-input-states-02.html');
            let fileName: string = '../../../styles/'+ themeChanged[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-normal')), 'floating_input_states_normal-02_'+themeChanged[i]);
            });
        });

        it('Bigger Floating Label TextBox with RTL mode rendering', function () {
            browser.load('/demos/input/css_component/floating-input-states-02.html');
            let fileName: string = '../../../styles/'+ themeChanged[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-bigger')), 'floating_input_states_bigger-02_'+themeChanged[i]);
            });
        });

        it('Bigger-Small Floating Label TextBox with RTL mode rendering', function () {
            browser.load('/demos/input/css_component/floating-input-states-02.html');
            let fileName: string = '../../../styles/'+ themeChanged[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-small-bigger')), 'floating_input_states_small_bigger-02_'+themeChanged[i]);
            });
        });
    }
});

describe('CSS TextBox with validation', function () {
    for( let i = 0 ; i < theme.length; i++ ) {
        it('Small TextBox with validation rendering', function () {
            browser.load('/demos/input/css_component/default-input-validation.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-small')), 'default_input_validation_small_'+theme[i]);
                let eleLoc1: ElementFinder = element(by.css('.control-panel-small')).all(by.css('.e-input-group input')).get(0);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-small')), 'default_input_validation_small_click_'+theme[i]);
            });
        });

        it('Normal TextBox with validation rendering', function () {
            browser.load('/demos/input/css_component/default-input-validation.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-normal')), 'default_input_validation_normal_'+theme[i]);
                let eleLoc: ElementFinder = element(by.css('.control-panel-normal')).all(by.css('.e-input-group input')).get(0);
                eleLoc.sendKeys(Key.TAB).then(function () {
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'default_input_validation_normal_focus_'+theme[i]);
                });
                let eleLoc1: ElementFinder = element(by.css('.control-panel-normal')).all(by.css('.e-input-group input')).get(1);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-normal')), 'default_input_validation_normal_click_'+theme[i]);
            });
        });

        it('Bigger TextBox with validation rendering', function () {
            browser.load('/demos/input/css_component/default-input-validation.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-bigger')), 'default_input_validation_bigger_'+theme[i]);
                let eleLoc: ElementFinder = element(by.css('.control-panel-bigger')).all(by.css('.e-input-group input')).get(1);
                eleLoc.sendKeys(Key.TAB).then(function () {
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'default_input_validation_bigger_focus_'+theme[i]);
                });
                let eleLoc1: ElementFinder = element(by.css('.control-panel-bigger')).all(by.css('.e-input-group input')).get(2);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-bigger')), 'default_input_validation_bigger_click_'+theme[i]);
            });
        });

        it('Bigger-Small TextBox with validation rendering', function () {
            browser.load('/demos/input/css_component/default-input-validation.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-small-bigger')), 'default_input_validation_small_bigger_'+theme[i]);
                let eleLoc: ElementFinder = element(by.css('.control-panel-small-bigger')).all(by.css('.e-input-group input')).get(2);
                eleLoc.sendKeys(Key.TAB).then(function () {
                    browser.sleep(1500);
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'default_input_validation_small_bigger_focus_'+theme[i]);
                });
                let eleLoc1: ElementFinder = element(by.css('.control-panel-small-bigger')).all(by.css('.e-input-group input')).get(3);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-small-bigger')), 'default_input_validation_small_bigger_click_'+theme[i]);
            });
        });
    }
});

describe('CSS Floating Label TextBox with validation', function () {
    for( let i = 0 ; i < theme.length; i++ ) {
        it('Small Floating Label TextBox with validation rendering', function () {
            browser.load('/demos/input/css_component/floating-input-validation.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-small')), 'floating_input_validation_small_'+theme[i]);
                let eleLoc1: ElementFinder = element(by.css('.control-panel-small')).all(by.css('.e-float-input input')).get(0);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-small')), 'floating_input_validation_small_click_'+theme[i]);
            });
        });

        it('Normal Floating Label TextBox with validation rendering', function () {
            browser.load('/demos/input/css_component/floating-input-validation.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-normal')), 'floating_input_validation_normal_'+theme[i]);
                let eleLoc: ElementFinder = element(by.css('.control-panel-normal')).all(by.css('.e-float-input input')).get(0);
                eleLoc.sendKeys(Key.TAB).then(function () {
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'float_input_validation_normal_focus_'+theme[i]);
                });
                let eleLoc1: ElementFinder = element(by.css('.control-panel-normal')).all(by.css('.e-float-input input')).get(1);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-normal')), 'floating_input_validation_normal_click_'+theme[i]);
            });
        });

        it('Bigger Floating Label TextBox with validation rendering', function () {
            browser.load('/demos/input/css_component/floating-input-validation.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-bigger')), 'floating_input_validation_bigger_'+theme[i]);
                let eleLoc: ElementFinder = element(by.css('.control-panel-bigger')).all(by.css('.e-float-input input')).get(1);
                eleLoc.sendKeys(Key.TAB).then(function () {
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'float_input_validation_bigger_focus_'+theme[i]);
                });
                let eleLoc1: ElementFinder = element(by.css('.control-panel-bigger')).all(by.css('.e-float-input input')).get(2);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-bigger')), 'floating_input_validation_bigger_click_'+theme[i]);
            });
        });

        it('Bigger-Small Floating Label TextBox with validation rendering', function () {
            browser.load('/demos/input/css_component/floating-input-validation.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-small-bigger')), 'floating_input_validation_small_bigger_'+theme[i]);
                let eleLoc: ElementFinder = element(by.css('.control-panel-small-bigger')).all(by.css('.e-float-input input')).get(2);
                eleLoc.sendKeys(Key.TAB).then(function () {
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'float_input_validation_small_bigger_focus_'+theme[i]);
                });
                let eleLoc1: ElementFinder = element(by.css('.control-panel-small-bigger')).all(by.css('.e-float-input input')).get(3);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-small-bigger')), 'floating_input_validation_small_bigger_click_'+theme[i]);
            });
        });
    }
});

describe('CSS TextBox with custom theme', function () {
    for( let i = 0 ; i < theme.length; i++ ) {
        it('Small TextBox with custom theme rendering', function () {
            browser.load('/demos/input/css_component/default-input-custom-theme.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-small')), 'default_input_theme_small_'+theme[i]);
                let eleLoc: ElementFinder = element(by.css('.control-panel-small')).all(by.css('input')).get(0);
                eleLoc.sendKeys(Key.TAB).then(function () {
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-small')), 'default_input_theme_small_focus_'+theme[i]);
                });
                let eleLoc1: ElementFinder = element(by.css('.control-panel-small')).all(by.css('.e-input-group input')).get(0);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-small')), 'default_input_theme_small_click_'+theme[i]);
            });
        });

        it('Normal TextBox with custom theme rendering', function () {
            browser.load('/demos/input/css_component/default-input-custom-theme.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-normal')), 'default_input_theme_normal_'+theme[i]);
                let eleLoc: ElementFinder = element(by.css('.control-panel-normal')).all(by.css('input')).get(0);
                eleLoc.sendKeys(Key.TAB).then(function () {
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'default_input_theme_normal_focus_'+theme[i]);
                });
                let eleLoc1: ElementFinder = element(by.css('.control-panel-normal')).all(by.css('.e-input-group input')).get(0);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-normal')), 'default_input_theme_normal_click_'+theme[i]);
            });
        });

        it('Bigger TextBox with custom theme rendering', function () {
            browser.load('/demos/input/css_component/default-input-custom-theme.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-bigger')), 'default_input_theme_bigger_'+theme[i]);
                let eleLoc: ElementFinder = element(by.css('.control-panel-bigger')).all(by.css('input')).get(0);
                eleLoc.sendKeys(Key.TAB).then(function () {
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'default_input_theme_bigger_focus_'+theme[i]);
                });
                let eleLoc1: ElementFinder = element(by.css('.control-panel-bigger')).all(by.css('.e-input-group input')).get(0);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-bigger')), 'default_input_theme_bigger_click_'+theme[i]);
            });
        });

        it('Bigger-Small TextBox with custom theme rendering', function () {
            browser.load('/demos/input/css_component/default-input-custom-theme.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-small-bigger')), 'default_input_theme_small_bigger_'+theme[i]);
                let eleLoc: ElementFinder = element(by.css('.control-panel-small-bigger')).all(by.css('input')).get(0);
                eleLoc.sendKeys(Key.TAB).then(function () {
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'default_input_theme_small_bigger_focus_'+theme[i]);
                });
                let eleLoc1: ElementFinder = element(by.css('.control-panel-small-bigger')).all(by.css('.e-input-group input')).get(0);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-small-bigger')), 'default_input_theme_small_bigger_click_'+theme[i]);
            });
        });
    }
});

describe('CSS Floating Label TextBox with custom theme', function () {
    for( let i = 0 ; i < theme.length; i++ ) {
        it('Small Floating Label with custom theme rendering', function () {
            browser.load('/demos/input/css_component/floating-input-custom-theme.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-small')), 'floating_input_theme_small_'+theme[i]);
                let eleLoc1: ElementFinder = element(by.css('.control-panel-small')).all(by.css('.e-float-input input')).get(0);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-small')), 'floating_input_theme_small_click_'+theme[i]);
            });
        });

        it('Normal Floating Label with custom theme rendering', function () {
            browser.load('/demos/input/css_component/floating-input-custom-theme.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-normal')), 'floating_input_theme_normal_'+theme[i]);
                let eleLoc: ElementFinder = element(by.css('.control-panel-normal')).all(by.css('.e-float-input input')).get(0);
                eleLoc.sendKeys(Key.TAB).then(function () {
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'float_input_theme_normal_focus_'+theme[i]);
                });
                let eleLoc1: ElementFinder = element(by.css('.control-panel-normal')).all(by.css('.e-float-input input')).get(1);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-normal')), 'floating_input_theme_normal_click_'+theme[i]);
            });
        });

        it('Bigger Floating Label with custom theme rendering', function () {
            browser.load('/demos/input/css_component/floating-input-custom-theme.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-bigger')), 'floating_input_theme_bigger_'+theme[i]);
                let eleLoc: ElementFinder = element(by.css('.control-panel-bigger')).all(by.css('.e-float-input input')).get(1);
                eleLoc.sendKeys(Key.TAB).then(function () {
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'float_input_theme_bigger_focus_'+theme[i]);
                });
                let eleLoc1: ElementFinder = element(by.css('.control-panel-bigger')).all(by.css('.e-float-input input')).get(2);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-bigger')), 'floating_input_theme_bigger_click_'+theme[i]);
            });
        });

        it('Bigger-Small Floating Label with custom theme rendering', function () {
            browser.load('/demos/input/css_component/floating-input-custom-theme.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-small-bigger')), 'floating_input_theme_small_bigger_'+theme[i]);
                let eleLoc: ElementFinder = element(by.css('.control-panel-small-bigger')).all(by.css('.e-float-input input')).get(2);
                eleLoc.sendKeys(Key.TAB).then(function () {
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'float_input_theme_small_bigger_focus_'+theme[i]);
                });
                let eleLoc1: ElementFinder = element(by.css('.control-panel-small-bigger')).all(by.css('.e-float-input input')).get(3);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-small-bigger')), 'floating_input_theme_small_bigger_click_'+theme[i]);
            });
        });
    }
});

describe('Utility rendering of TextBox and Floating Label TextBox', function () {
    for( let i = 0 ; i < theme.length; i++ ) {
        it('Small TextBox rendering', function () {
            browser.load('/demos/input/utility_rendering/default-input.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-small')), 'util_default_small_'+theme[i]);
                browser.executeScript(function(){
                    let inputs = document.getElementsByClassName('e-clear-icon e-clear-icon-hide');
                    (<HTMLElement>inputs[0]).click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small')), 'util_default_small_clear_'+theme[i]);
                });
    
                let eleLoc: ElementFinder = element(by.css('.control-panel-small')).all(by.css('.e-input-group input')).get(0);
                eleLoc.sendKeys(Key.TAB).then(function () {
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-small')), 'util_default_input_small_focus_'+theme[i]);
                });
                // Default Input
                let eleLoc1: ElementFinder = element(by.css('.control-panel-small')).all(by.css('.e-input-group input')).get(1);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-small')), 'util_default_input_small_basic_click_'+theme[i]);
                
                // Clear Input
                let eleLoc2: ElementFinder = element(by.css('.control-panel-small')).all(by.css('.e-input-group input')).get(2);
                browser.actions().mouseDown(eleLoc2).mouseUp(eleLoc2).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-small')), 'util_default_input_small_clear_click_'+theme[i]);
                
                // Input with Icon
                let eleLoc3: ElementFinder = element(by.css('.control-panel-small')).all(by.css('.e-input-group input')).get(3);
                browser.actions().mouseDown(eleLoc3).mouseUp(eleLoc3).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-small')), 'util_default_input_small_Inpticon_click_'+theme[i]);
    
                // Input with Multiple Icon
                let eleLoc4: ElementFinder = element(by.css('.control-panel-small')).all(by.css('.e-input-group input')).get(4);
                browser.actions().mouseDown(eleLoc4).mouseUp(eleLoc4).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-small')), 'util_default_input_small_multiple_icon_click_'+theme[i]);
            });
        });

        it('Normal TextBox rendering', function () {
            browser.load('/demos/input/utility_rendering/default-input.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-normal')), 'util_default_input_normal_'+theme[i]);
                browser.executeScript(function(){
                    let inputs = document.getElementsByClassName('e-clear-icon e-clear-icon-hide');
                    (<HTMLElement>inputs[1]).click();
                }).then(function(){
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'util_default_normal_clear_'+theme[i]);
                });
                browser.sleep(300);
                let eleLoc: ElementFinder = element(by.css('.control-panel-normal')).all(by.css('input')).get(0);
                eleLoc.sendKeys(Key.TAB).then(function () {
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'util_default_input_normal_focus_'+theme[i]);
                });
                // Default Input
                let eleLoc1: ElementFinder = element(by.css('.control-panel-normal')).all(by.css('.e-input-group input')).get(1);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-normal')), 'util_default_input_normal_basic_click_'+theme[i]);
                
                // Clear Input
                let eleLoc2: ElementFinder = element(by.css('.control-panel-normal')).all(by.css('.e-input-group input')).get(2);
                browser.actions().mouseDown(eleLoc2).mouseUp(eleLoc2).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-normal')), 'util_default_input_normal_clear_click_'+theme[i]);
                
                // Input with Icon
                let eleLoc3: ElementFinder = element(by.css('.control-panel-normal')).all(by.css('.e-input-group input')).get(3);
                browser.actions().mouseDown(eleLoc3).mouseUp(eleLoc3).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-normal')), 'util_default_input_normal_Inpticon_click_'+theme[i]);
    
                // Input with Multiple Icon
                let eleLoc4: ElementFinder = element(by.css('.control-panel-normal')).all(by.css('.e-input-group input')).get(4);
                browser.actions().mouseDown(eleLoc4).mouseUp(eleLoc4).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-normal')), 'util_default_input_normal_multiple_icon_click_'+theme[i]);
            });
        });

        it('Bigger TextBox rendering', function () {
            browser.load('/demos/input/utility_rendering/default-input.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-bigger')), 'util_default_input_bigger_'+theme[i]);
                browser.executeScript(function(){
                    let inputs = document.getElementsByClassName('e-clear-icon e-clear-icon-hide');
                    (<HTMLElement>inputs[2]).click();
                }).then(function(){
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'util_default_bigger_clear_'+theme[i]);
                });
                browser.sleep(300);
                let eleLoc: ElementFinder = element(by.css('.control-panel-bigger')).all(by.css('input')).get(0);
                eleLoc.sendKeys(Key.TAB).then(function () {
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'util_default_input_bigger_focus_'+theme[i]);
                });
                // Default Input
                let eleLoc1: ElementFinder = element(by.css('.control-panel-bigger')).all(by.css('.e-input-group input')).get(1);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-bigger')), 'util_default_input_bigger_basic_click_'+theme[i]);
                
                // Clear Input
                let eleLoc2: ElementFinder = element(by.css('.control-panel-bigger')).all(by.css('.e-input-group input')).get(2);
                browser.actions().mouseDown(eleLoc2).mouseUp(eleLoc2).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-bigger')), 'util_default_input_bigger_clear_click_'+theme[i]);
                
                // Input with Icon
                let eleLoc3: ElementFinder = element(by.css('.control-panel-bigger')).all(by.css('.e-input-group input')).get(3);
                browser.actions().mouseDown(eleLoc3).mouseUp(eleLoc3).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-bigger')), 'util_default_input_bigger_Inpticon_click_'+theme[i]);
    
                // Input with Multiple Icon
                let eleLoc4: ElementFinder = element(by.css('.control-panel-bigger')).all(by.css('.e-input-group input')).get(4);
                browser.actions().mouseDown(eleLoc4).mouseUp(eleLoc4).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-bigger')), 'util_default_input_bigger_multiple_icon_click_'+theme[i]);
            });
        });

        it('Bigger-Small TextBox rendering', function () {
            browser.load('/demos/input/utility_rendering/default-input.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_default_input_small_bigger_'+theme[i]);
                browser.executeScript(function(){
                    let inputs = document.getElementsByClassName('e-clear-icon e-clear-icon-hide');
                    (<HTMLElement>inputs[3]).click();
                }).then(function(){
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_default_small_bigger_clear_'+theme[i]);
                });
                browser.sleep(300);
                let eleLoc: ElementFinder = element(by.css('.control-panel-small-bigger')).all(by.css('input')).get(0);
                eleLoc.sendKeys(Key.TAB).then(function () {
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_default_input_small_bigger_focus_'+theme[i]);
                });
                // Default Input
                let eleLoc1: ElementFinder = element(by.css('.control-panel-small-bigger')).all(by.css('.e-input-group input')).get(1);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_default_input_small_bigger_basic_click_'+theme[i]);
                
                // Clear Input
                let eleLoc2: ElementFinder = element(by.css('.control-panel-small-bigger')).all(by.css('.e-input-group input')).get(2);
                browser.actions().mouseDown(eleLoc2).mouseUp(eleLoc2).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_default_input_small_bigger_clear_click_'+theme[i]);
                
                // Input with Icon
                let eleLoc3: ElementFinder = element(by.css('.control-panel-small-bigger')).all(by.css('.e-input-group input')).get(3);
                browser.actions().mouseDown(eleLoc3).mouseUp(eleLoc3).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_default_input_small_bigger_Inpticon_click_'+theme[i]);
    
                // Input with Multiple Icon
                let eleLoc4: ElementFinder = element(by.css('.control-panel-small-bigger')).all(by.css('.e-input-group input')).get(4);
                browser.actions().mouseDown(eleLoc4).mouseUp(eleLoc4).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_default_input_small_bigger_multiple_icon_click_'+theme[i]);
            });
        });

        it('Small Floating Label TextBox rendering', function () {
            browser.load('/demos/input/utility_rendering/float-input.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-small')), 'util_floating_input_small_'+theme[i]);
                browser.executeScript(function(){
                    let inputs = document.getElementsByClassName('e-clear-icon e-clear-icon-hide');
                    (<HTMLElement>inputs[0]).click();
                }).then(function() {
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-small')), 'util_floating_small_clear_'+theme[i]);
                });
    
                browser.sleep(300);
                let eleLoc: ElementFinder = element(by.css('.control-panel-small')).all(by.css('.e-float-input input')).get(0);
                eleLoc.sendKeys(Key.TAB).then(function () {
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-small')), 'util_floating_input_small_focus_'+theme[i]);
                });
                // Default Input
                let eleLoc1: ElementFinder = element(by.css('.control-panel-small')).all(by.css('.e-float-input input')).get(1);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-small')), 'util_floating_input_small_basic_click_'+theme[i]);
    
                // Float always type
                let eleLoc5: ElementFinder = element(by.css('.control-panel-small')).all(by.css('.e-float-input input')).get(2);
                browser.actions().mouseDown(eleLoc5).mouseUp(eleLoc5).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-small')), 'util_floating_input_small_always_click_'+theme[i]);
                
                // Clear Input
                let eleLoc2: ElementFinder = element(by.css('.control-panel-small')).all(by.css('.e-float-input input')).get(3);
                browser.actions().mouseDown(eleLoc2).mouseUp(eleLoc2).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-small')), 'util_floating_input_small_clear_click_'+theme[i]);
                
                // Input with Icon
                let eleLoc3: ElementFinder = element(by.css('.control-panel-small')).all(by.css('.e-float-input input')).get(4);
                browser.actions().mouseDown(eleLoc3).mouseUp(eleLoc3).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-small')), 'util_floating_input_small_Inpticon_click_'+theme[i]);
    
                // Input with Multiple Icon
                let eleLoc4: ElementFinder = element(by.css('.control-panel-small')).all(by.css('.e-float-input input')).get(5);
                browser.actions().mouseDown(eleLoc4).mouseUp(eleLoc4).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-small')), 'util_floating_input_small_multiple_icon_click_'+theme[i]);
            }); 
        });

        it('Normal Floating Label TextBox rendering', function () {
            browser.load('/demos/input/utility_rendering/float-input.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-normal')), 'util_floating_input_normal_'+theme[i]);
                browser.executeScript(function(){
                    let inputs = document.getElementsByClassName('e-clear-icon e-clear-icon-hide');
                    (<HTMLElement>inputs[1]).click();
                }).then(function(){
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'util_floating_normal_clear_'+theme[i]);
                });
    
                browser.sleep(300);
                let eleLoc: ElementFinder = element(by.css('.control-panel-normal')).all(by.css('.e-float-input input')).get(0);
                eleLoc.sendKeys(Key.TAB).then(function () {
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'util_floating_input_normal_focus_'+theme[i]);
                });
                // Default Input
                let eleLoc1: ElementFinder = element(by.css('.control-panel-normal')).all(by.css('.e-float-input input')).get(1);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-normal')), 'util_floating_input_normal_basic_click_'+theme[i]);
    
                // Float always type
                let eleLoc5: ElementFinder = element(by.css('.control-panel-normal')).all(by.css('.e-float-input input')).get(2);
                browser.actions().mouseDown(eleLoc5).mouseUp(eleLoc5).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-normal')), 'util_floating_input_normal_always_click_'+theme[i]);
                
                // Clear Input
                let eleLoc2: ElementFinder = element(by.css('.control-panel-normal')).all(by.css('.e-float-input input')).get(3);
                browser.actions().mouseDown(eleLoc2).mouseUp(eleLoc2).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-normal')), 'util_floating_input_normal_clear_click_'+theme[i]);
                
                // Input with Icon
                let eleLoc3: ElementFinder = element(by.css('.control-panel-normal')).all(by.css('.e-float-input input')).get(4);
                browser.actions().mouseDown(eleLoc3).mouseUp(eleLoc3).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-normal')), 'util_floating_input_normal_Inpticon_click_'+theme[i]);
    
                // Input with Multiple Icon
                let eleLoc4: ElementFinder = element(by.css('.control-panel-normal')).all(by.css('.e-float-input input')).get(5);
                browser.actions().mouseDown(eleLoc4).mouseUp(eleLoc4).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-normal')), 'util_floating_input_normal_multiple_icon_click_'+theme[i]);
            });
        });

        it('Bigger Floating Label TextBox rendering', function () {
            browser.load('/demos/input/utility_rendering/float-input.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-bigger')), 'util_floating_input_bigger_'+theme[i]);
                browser.executeScript(function() {
                    let inputs = document.getElementsByClassName('e-clear-icon e-clear-icon-hide');
                    (<HTMLElement>inputs[2]).click();
                }).then(function() {
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'util_floating_bigger_clear_'+theme[i]);
                });
    
                browser.sleep(300);
                let eleLoc: ElementFinder = element(by.css('.control-panel-bigger')).all(by.css('.e-float-input input')).get(0);
                eleLoc.sendKeys(Key.TAB).then(function () {
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'util_floating_input_bigger_focus_'+theme[i]);
                });
                // Default Input
                let eleLoc1: ElementFinder = element(by.css('.control-panel-bigger')).all(by.css('.e-float-input input')).get(1);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-bigger')), 'util_floating_input_bigger_basic_click_'+theme[i]);
    
                // Float always type
                let eleLoc5: ElementFinder = element(by.css('.control-panel-bigger')).all(by.css('.e-float-input input')).get(2);
                browser.actions().mouseDown(eleLoc5).mouseUp(eleLoc5).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-bigger')), 'util_floating_input_bigger_always_click_'+theme[i]);
                
                // Clear Input
                let eleLoc2: ElementFinder = element(by.css('.control-panel-bigger')).all(by.css('.e-float-input input')).get(3);
                browser.actions().mouseDown(eleLoc2).mouseUp(eleLoc2).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-bigger')), 'util_floating_input_bigger_clear_click_'+theme[i]);
                
                // Input with Icon
                let eleLoc3: ElementFinder = element(by.css('.control-panel-bigger')).all(by.css('.e-float-input input')).get(4);
                browser.actions().mouseDown(eleLoc3).mouseUp(eleLoc3).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-bigger')), 'util_floating_input_bigger_Inpticon_click_'+theme[i]);
    
                // Input with Multiple Icon
                let eleLoc4: ElementFinder = element(by.css('.control-panel-bigger')).all(by.css('.e-float-input input')).get(5);
                browser.actions().mouseDown(eleLoc4).mouseUp(eleLoc4).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-bigger')), 'util_floating_input_bigger_multiple_icon_click_'+theme[i]);
            });
        });

        it('Bigger-Small Floating Label TextBox rendering', function () {
            browser.load('/demos/input/utility_rendering/float-input.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_floating_input_small_bigger_'+theme[i]);
                browser.executeScript(function(){
                    let inputs = document.getElementsByClassName('e-clear-icon e-clear-icon-hide');
                    (<HTMLElement>inputs[3]).click();
                }).then(function(){
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_floating_small_bigger_clear_'+theme[i]);
                });
    
                browser.sleep(300);
                let eleLoc: ElementFinder = element(by.css('.control-panel-small-bigger')).all(by.css('.e-float-input input')).get(0);
                eleLoc.sendKeys(Key.TAB).then(function () {
                    browser.sleep(300);
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_floating_input_small_bigger_focus_'+theme[i]);
                });
                // Default Input
                let eleLoc1: ElementFinder = element(by.css('.control-panel-small-bigger')).all(by.css('.e-float-input input')).get(1);
                browser.actions().mouseDown(eleLoc1).mouseUp(eleLoc1).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_floating_input_small_bigger_basic_click_'+theme[i]);
    
                // Float always type
                let eleLoc5: ElementFinder = element(by.css('.control-panel-small-bigger')).all(by.css('.e-float-input input')).get(2);
                browser.actions().mouseDown(eleLoc5).mouseUp(eleLoc5).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_floating_input_small_bigger_always_click_'+theme[i]);
                
                // Clear Input
                let eleLoc2: ElementFinder = element(by.css('.control-panel-small-bigger')).all(by.css('.e-float-input input')).get(3);
                browser.actions().mouseDown(eleLoc2).mouseUp(eleLoc2).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_floating_input_small_bigger_clear_click_'+theme[i]);
                
                // Input with Icon
                let eleLoc3: ElementFinder = element(by.css('.control-panel-small-bigger')).all(by.css('.e-float-input input')).get(4);
                browser.actions().mouseDown(eleLoc3).mouseUp(eleLoc3).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_floating_input_small_bigger_Inpticon_click_'+theme[i]);
    
                // Input with Multiple Icon
                let eleLoc4: ElementFinder = element(by.css('.control-panel-small-bigger')).all(by.css('.e-float-input input')).get(5);
                browser.actions().mouseDown(eleLoc4).mouseUp(eleLoc4).perform();
                browser.sleep(300);
                browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_floating_input_small_bigger_multiple_icon_click_'+theme[i]);
            }); 
        });
    }
});

describe('Utility rendering of TextBox and Floating Label TextBox with different states', function () {
    for( let i = 0 ; i < theme.length; i++ ) {
        it('Small TextBox with disabled states rendering', function () {
            browser.load('/demos/input/utility_rendering/default-input-states-01.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-small')), 'util_default_input_states_small_'+theme[i]);
            });
        });

        it('Normal TextBox with disabled states rendering', function () {
            browser.load('/demos/input/utility_rendering/default-input-states-01.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-normal')), 'util_default_input_states_normal_'+theme[i]);
            });
        });

        it('Bigger TextBox with disabled states rendering', function () {
            browser.load('/demos/input/utility_rendering/default-input-states-01.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-bigger')), 'util_default_input_states_bigger_'+theme[i]);
            });  
        });

        it('Bigger-Small TextBox with disabled states rendering', function () {
            browser.load('/demos/input/utility_rendering/default-input-states-01.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_default_input_states_small_bigger_'+theme[i]);
            });
        });

        it('Small TextBox with RTL mode rendering', function () {
            browser.load('/demos/input/utility_rendering/default-input-states-02.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-small')), 'util_default_input_states_small_03_'+theme[i]);
            });
        });

        it('Normal TextBox with RTL modes rendering', function () {
            browser.load('/demos/input/utility_rendering/default-input-states-02.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-normal')), 'util_default_input_states_normal_03_'+theme[i]);
            });
        });

        it('Bigger TextBox with RTL mode rendering', function () {
            browser.load('/demos/input/utility_rendering/default-input-states-02.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-bigger')), 'util_default_input_states_bigger_03_'+theme[i]);
            });
        });

        it('Bigger-Small TextBox with RTL mode rendering', function () {
            browser.load('/demos/input/utility_rendering/default-input-states-02.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_default_input_states_small_bigger_03_'+theme[i]);
            });
        });

        it('Small Floating Label TextBox with disabled states rendering', function () {
            browser.load('/demos/input/utility_rendering/float-input-states-01.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(2000);
                browser.compareScreen(element(by.className('control-panel-small')), 'util_floating_input_states_small_'+theme[i]);
            });
        });

        it('Normal Floating Label TextBox with disabled states rendering', function () {
            browser.load('/demos/input/utility_rendering/float-input-states-01.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-normal')), 'util_floating_input_states_normal_'+theme[i]);
            });
        });

        it('Bigger Floating Label TextBox with disabled states rendering', function () {
            browser.load('/demos/input/utility_rendering/float-input-states-01.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-bigger')), 'util_floating_input_states_bigger_'+theme[i]);
            });
        });

        it('Bigger-Small Floating Label TextBox with disabled states rendering', function () {
            browser.load('/demos/input/utility_rendering/float-input-states-01.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_floating_input_states_small_bigger_'+theme[i]);
            });
        });

        it('Small Floating Label TextBox with RTL mode rendering', function () {
            browser.load('/demos/input/utility_rendering/float-input-states-02.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-small')), 'util_floating_input_states_small-02_'+theme[i]);
            });
        });

        it('Normal Floating Label TextBox with RTL mode rendering', function () {
            browser.load('/demos/input/utility_rendering/float-input-states-02.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-normal')), 'util_floating_input_states_normal-02_'+theme[i]);
            });
        });

        it('Bigger Floating Label TextBox with RTL mode rendering', function () {
            browser.load('/demos/input/utility_rendering/float-input-states-02.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-bigger')), 'util_floating_input_states_bigger-02_'+theme[i]);
            });
        });

        it('Bigger-Small Floating Label TextBox with RTL mode rendering', function () {
            browser.load('/demos/input/utility_rendering/float-input-states-02.html');
            let fileName: string = '../../../styles/'+ theme[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_floating_input_states_small_bigger-02_'+theme[i]);
            });
        });
    }
});

describe('Utility rendering of TextBox with Export methods', function () {
    for( let i = 0 ; i < themeChanged.length; i++ ) {
        it('Small and Noraml TextBox rendering', function () {
            browser.load('/demos/input/utility_rendering/default-input-property-01.html');
            let fileName: string = '../../../styles/'+ themeChanged[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            // let styleString = "document.getElementsByTagName('body')[0].setAttribute('style','background-color:#000')";
            // path = i == 3 ? path + styleString : path;
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-small')), 'util_default_input_small_property_panel_'+themeChanged[i]);
                browser.compareScreen(element(by.className('control-panel-normal')), 'util_default_input_normal_property_panel_'+themeChanged[i]);
                browser.executeScript(function(){
                    document.getElementById('valuehold').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small')), 'util_default_input_small_setvalue_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'util_default_input_normal_setvalue_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('clearenable').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small')), 'util_default_input_small_value_disabled_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'util_default_input_normal_value_disabled_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('setenable').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small')), 'util_default_input_small_value_enabled_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'util_default_input_normal_value_enabled_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('setrtl').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small')), 'util_default_input_small_value_rtl_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'util_default_input_normal_value_rtl_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('clearrtl').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small')), 'util_default_input_small_value_ltr_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'util_default_input_normal_value_ltr_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('setread').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small')), 'util_default_input_small_value_readonly_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'util_default_input_normal_value_readonly_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('clearread').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small')), 'util_default_input_small_value_remve_readonly_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'util_default_input_normal_value_remve_readonly_'+themeChanged[i]);
                });
    
    
                browser.executeScript(function(){
                    (document.getElementById('valuetext') as HTMLInputElement).value = '';
                    document.getElementById('valuehold').click();
                }).then(function() {
                    browser.compareScreen(element(by.className('control-panel-small')), 'util_default_input_small_wotvalue_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'util_default_input_normal_wotvalue_'+theme[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('placehold').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small')), 'util_default_input_small_setplaceholder_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'util_default_input_normal_setplaceholder_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('clearenable').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small')), 'util_default_input_small_wo_value_disabled_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'util_default_input_normal_wo_value_disabled_'+theme[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('setenable').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small')), 'util_default_input_small_wo_value_enabled_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'util_default_input_normal_wo_value_enabled_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('setrtl').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small')), 'util_default_input_small_wo_value_rtl_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'util_default_input_normal_wo_value_rtl_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('clearrtl').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small')), 'util_default_input_small_wo_value_ltr_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'util_default_input_normal_wo_value_ltr_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('setread').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small')), 'util_default_input_small_wo_value_readonly_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'util_default_input_normal_wo_value_readonly_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('clearread').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small')), 'util_default_input_small_wo_value_remve_readonly_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'util_default_input_normal_wo_value_remve_readonly_'+themeChanged[i]);
                });
            });
        });

        it('Bigger and Bigger small TextBox rendering', function () {
            browser.load('/demos/input/utility_rendering/default-input-property-02.html');
            let fileName: string = '../../../styles/'+ themeChanged[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_default_input_small_bigger_property_panel_'+themeChanged[i]);
                browser.compareScreen(element(by.className('control-panel-bigger')), 'util_default_input_bigger_property_panel_'+themeChanged[i]);
                browser.executeScript(function(){
                    document.getElementById('valuehold').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_default_input_small_bigger_setvalue_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'util_default_input_bigger_setvalue_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('clearenable').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_default_input_small_bigger_value_disabled_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'util_default_input_bigger_value_disabled_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('setenable').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_default_input_small_bigger_value_enabled_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'util_default_input_bigger_value_enabled_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('setrtl').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_default_input_small_bigger_value_rtl_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'util_default_input_bigger_value_rtl_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('clearrtl').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_default_input_small_bigger_value_ltr_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'util_default_input_bigger_value_ltr_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('setread').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_default_input_small_bigger_value_readonly_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'util_default_input_bigger_value_readonly_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('clearread').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_default_input_small_bigger_value_remve_readonly_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'util_default_input_bigger_value_remve_readonly_'+themeChanged[i]);
                });
    
                browser.executeScript(function(){
                    (document.getElementById('valuetext') as HTMLInputElement).value = '';
                    document.getElementById('valuehold').click();
                }).then(function() {
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_default_input_small_bigger_wotvalue_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'util_default_input_bigger_wotvalue_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('placehold').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_default_input_small_bigger_setplaceholder_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'util_default_input_bigger_setplaceholder_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('clearenable').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_default_input_small_bigger_wo_value_disabled_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'util_default_input_bigger_wo_value_disabled_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('setenable').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_default_input_small_bigger_wo_value_enabled_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'util_default_input_bigger_wo_value_enabled_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('setrtl').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_default_input_small_bigger_wo_value_rtl_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'util_default_input_bigger_wo_value_rtl_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('clearrtl').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_default_input_small_bigger_wo_value_ltr_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'util_default_input_bigger_wo_value_ltr_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('setread').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_default_input_small_bigger_wo_value_readonly_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'util_default_input_bigger_wo_value_readonly_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('clearread').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_default_input_small_bigger_wo_value_remve_readonly_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'util_default_input_bigger_wo_value_remve_readonly_'+themeChanged[i]);
                });
            });
        });
    }
});

describe('Utility rendering of Floating Label TextBox with Export methods', function () {
    for( let i = 0 ; i < themeChanged.length; i++ ) {
        it('Small and Noraml Floating Label TextBox rendering', function () {
            browser.load('/demos/input/utility_rendering/float-input-property-01.html');
            let fileName: string = '../../../styles/'+ themeChanged[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-small')), 'util_float_input_small_property_panel_'+themeChanged[i]);
                browser.compareScreen(element(by.className('control-panel-normal')), 'util_float_input_normal_property_panel_'+themeChanged[i]);
                browser.executeScript(function(){
                    document.getElementById('valuehold').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small')), 'util_float_input_small_setvalue_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'util_float_input_normal_setvalue_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('clearenable').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small')), 'util_float_input_small_value_disabled_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'util_float_input_normal_value_disabled_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('setenable').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small')), 'util_float_input_small_value_enabled_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'util_float_input_normal_value_enabled_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('setrtl').click();
                }).then(function(){
					browser.sleep(1500);
                    browser.compareScreen(element(by.className('control-panel-small')), 'util_float_input_small_value_rtl_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'util_float_input_normal_value_rtl_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('clearrtl').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small')), 'util_float_input_small_value_ltr_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'util_float_input_normal_value_ltr_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('setread').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small')), 'util_float_input_small_value_readonly_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'util_float_input_normal_value_readonly_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('clearread').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small')), 'util_float_input_small_value_remve_readonly_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'util_float_input_normal_value_remve_readonly_'+themeChanged[i]);
                });
    
    
                browser.executeScript(function(){
                    (document.getElementById('valuetext') as HTMLInputElement).value = '';
                    document.getElementById('valuehold').click();
                }).then(function() {
					browser.sleep(1500);
                    browser.compareScreen(element(by.className('control-panel-small')), 'util_float_input_small_wotvalue_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'util_float_input_normal_wotvalue_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('placehold').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small')), 'util_float_input_small_setplaceholder_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'util_float_input_normal_setplaceholder_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('clearenable').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small')), 'util_float_input_small_wo_value_disabled_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'util_float_input_normal_wo_value_disabled_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('setenable').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small')), 'util_float_input_small_wo_value_enabled_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'util_float_input_normal_wo_value_enabled_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('setrtl').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small')), 'util_float_input_small_wo_value_rtl_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'util_float_input_normal_wo_value_rtl_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('clearrtl').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small')), 'util_float_input_small_wo_value_ltr_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'util_float_input_normal_wo_value_ltr_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('setread').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small')), 'util_float_input_small_wo_value_readonly_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'util_float_input_normal_wo_value_readonly_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('clearread').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small')), 'util_float_input_small_wo_value_remve_readonly_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-normal')), 'util_float_input_normal_wo_value_remve_readonly_'+themeChanged[i]);
                });
            });
        });

        it('Bigger and Bigger small Floating Label TextBox rendering', function () {
            browser.load('/demos/input/utility_rendering/float-input-property-02.html');
            let fileName: string = '../../../styles/'+ themeChanged[i] +'.css';
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','"+ fileName+"')";
            browser.executeScript(path).then(function() {
                browser.sleep(1500);
                browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_float_input_small_bigger_property_panel_'+themeChanged[i]);
                browser.compareScreen(element(by.className('control-panel-bigger')), 'util_float_input_bigger_property_panel_'+themeChanged[i]);
                browser.executeScript(function(){
                    document.getElementById('valuehold').click();
                }).then(function(){
					browser.sleep(1500);
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_float_input_small_bigger_setvalue_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'util_float_input_bigger_setvalue_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('clearenable').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_float_input_small_bigger_value_disabled_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'util_float_input_bigger_value_disabled_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('setenable').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_float_input_small_bigger_value_enabled_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'util_float_input_bigger_value_enabled_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('setrtl').click();
                }).then(function(){
					browser.sleep(1500);
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_float_input_small_bigger_value_rtl_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'util_float_input_bigger_value_rtl_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('clearrtl').click();
                }).then(function(){
					browser.sleep(1500);
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_float_input_small_bigger_value_ltr_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'util_float_input_bigger_value_ltr_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('setread').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_float_input_small_bigger_value_readonly_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'util_float_input_bigger_value_readonly_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('clearread').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_float_input_small_bigger_value_remve_readonly_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'util_float_input_bigger_value_remve_readonly_'+themeChanged[i]);
                });
    
    
                browser.executeScript(function(){
                    (document.getElementById('valuetext') as HTMLInputElement).value = '';
                    document.getElementById('valuehold').click();
                }).then(function() {
					browser.sleep(1500);
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_float_input_small_bigger_wotvalue_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'util_float_input_bigger_wotvalue_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('placehold').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_float_input_small_bigger_setplaceholder_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'util_float_input_bigger_setplaceholder_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('clearenable').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_float_input_small_bigger_wo_value_disabled_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'util_float_input_bigger_wo_value_disabled_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('setenable').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_float_input_small_bigger_wo_value_enabled_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'util_float_input_bigger_wo_value_enabled_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('setrtl').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_float_input_small_bigger_wo_value_rtl_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'util_float_input_bigger_wo_value_rtl_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('clearrtl').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_float_input_small_bigger_wo_value_ltr_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'util_float_input_bigger_wo_value_ltr_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('setread').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_float_input_small_bigger_wo_value_readonly_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'util_float_input_bigger_wo_value_readonly_'+themeChanged[i]);
                });
                browser.executeScript(function(){
                    document.getElementById('clearread').click();
                }).then(function(){
                    browser.compareScreen(element(by.className('control-panel-small-bigger')), 'util_float_input_small_bigger_wo_value_remve_readonly_'+themeChanged[i]);
                    browser.compareScreen(element(by.className('control-panel-bigger')), 'util_float_input_bigger_wo_value_remve_readonly_'+themeChanged[i]);
                });
            });
        });
    }
});
