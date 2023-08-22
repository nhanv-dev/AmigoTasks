"use client";

import { useState, useEffect } from 'react'

const WindowNotification = () => {
    const [notificationPermission, setNotificationPermission] = useState('default');

    useEffect(() => {
        Notification.requestPermission().then((permission) => {
            setNotificationPermission(permission);
        });
    }, []);

    const showBrowserNotification = (message: string) => {
        if (notificationPermission === 'granted') {
            new Notification('Notification', {
                body: message,
            });
        }
    };
    
    return null;
}

export default WindowNotification