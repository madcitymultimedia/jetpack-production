<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInitf11009ded9fc4592b6a05b61ce272b3c_jetpackⓥ11_9_a_2
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        require __DIR__ . '/platform_check.php';

        spl_autoload_register(array('ComposerAutoloaderInitf11009ded9fc4592b6a05b61ce272b3c_jetpackⓥ11_9_a_2', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInitf11009ded9fc4592b6a05b61ce272b3c_jetpackⓥ11_9_a_2', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInitf11009ded9fc4592b6a05b61ce272b3c_jetpackⓥ11_9_a_2::getInitializer($loader));

        $loader->setClassMapAuthoritative(true);
        $loader->register(true);

        $includeFiles = \Composer\Autoload\ComposerStaticInitf11009ded9fc4592b6a05b61ce272b3c_jetpackⓥ11_9_a_2::$files;
        foreach ($includeFiles as $fileIdentifier => $file) {
            composerRequiref11009ded9fc4592b6a05b61ce272b3c_jetpackⓥ11_9_a_2($fileIdentifier, $file);
        }

        return $loader;
    }
}

/**
 * @param string $fileIdentifier
 * @param string $file
 * @return void
 */
function composerRequiref11009ded9fc4592b6a05b61ce272b3c_jetpackⓥ11_9_a_2($fileIdentifier, $file)
{
    if (empty($GLOBALS['__composer_autoload_files'][$fileIdentifier])) {
        $GLOBALS['__composer_autoload_files'][$fileIdentifier] = true;

        require $file;
    }
}
