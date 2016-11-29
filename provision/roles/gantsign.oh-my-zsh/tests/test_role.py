import pytest

@pytest.mark.parametrize('username', [
    ('test_usr1'),
    ('test_usr2'),
])
def test_oh_my_zsh_install(File, username):
    oh_my_zsh = File('/home/' + username + '/.oh-my-zsh')
    assert oh_my_zsh.exists
    assert oh_my_zsh.is_directory
    assert oh_my_zsh.user == username
    assert oh_my_zsh.group == username

@pytest.mark.parametrize('username,theme,plugins', [
    ('test_usr1', 'test_theme1', 'test_plugin1 test_plugin2'),
    ('test_usr2', 'test_theme2', 'test_plugin3 test_plugin4'),
])
def test_oh_my_zsh_config(File, username, theme, plugins):
    zshrc = File('/home/' + username + '/.zshrc')
    assert zshrc.exists
    assert zshrc.is_file
    assert zshrc.user == username
    assert zshrc.group == username
    assert zshrc.contains(theme)
    assert zshrc.contains(plugins)

def test_console_setup(File):
    setup = File('/etc/default/console-setup')
    assert setup.exists
    assert setup.is_file
    assert setup.user == 'root'
    assert setup.group == 'root'
    assert setup.contains('CHARMAP="UTF-8"')
