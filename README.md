# QAECY widget
QAECY Widget for integration in any host app. This widget app can be used in any 3rd party app as a [web component](https://developer.mozilla.org/en-US/docs/Web/API/Web_components).

## Use

This section describes how you set up the widget in your app.

### Hello widget
In the head of your html load the qaecy widget web app from `https://cdn.jsdelivr.net/gh/qaecy/widget@<VERSION>/main.js`. The version parameter is optional but recommended in production. If you don't specify a version, the latest will be used (ex `https://cdn.jsdelivr.net/gh/qaecy/widget@v0.0.2/main.js` or `https://cdn.jsdelivr.net/gh/qaecy/widget/main.js`). 

Wit the script loaded you can use the `<qaecy-widget>` HTML tag in the body of your app. You also need to import the Poppins font and Google Material icons.

The widget will automatically fit the size of its parent, so we will put it in a 300x500px div.

Example:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />

    <!-- Fonts/icons -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>

    <!-- QAECY widget -->
    <script src="https://cdn.jsdelivr.net/gh/qaecy/widget@v0.0.2/main.js" type="module" ></script>

    <title>QAECY widget test</title>
    <style>
        #container{
            width: 300px; 
            height: 500px; 
            border: 1px solid; 
            margin: 50px;
        }
    </style>
  </head>
  <body>
    <div id="container">
      <qaecy-widget></qaecy-widget>
    </div>
  </body>
</html>
```

You should now see the widget with a message specifying that a config is needed.

![image](https://github.com/user-attachments/assets/6ee9049c-ae2e-4c7d-b714-d07f30d13b72)

### Demo mode
In order to just get an impression of what the widget offers you can run it in demo mode. This mode is toggled by setting the demo attribute to true (`<qaecy-widget demo="true"></qaecy-widget>`). In demo mode the widget can only simulate some pre defined questions.

![image](https://github.com/user-attachments/assets/557af6f4-20a0-4186-b26e-797f2b51c347)

Try one of the following:

* `List files`
* `Show architectural model`
* `Show info on door type D01`
* `What companies are in the project`

![image](https://github.com/user-attachments/assets/0d860032-1589-4fab-b07d-12d4eeceb25a)

### Setup

The widget needs to be fully intitalized before the options can be set. We use this hack to set the options as soon as the widget is ready.

To get an API key, APP id etc. reach out to QAECY.

```html
<script>
  const widget = document.getElementsByTagName('qaecy-widget')[0];
  const options = {
    auth: {
      providers: ['microsoft.com'],
      persistence: 'LOCAL',
    },
    config: {
      apiKey: '<API-KEY>',
      appId: '<APP-ID>',
      measurementId: '<MEASUREMENT-ID>'
    },
    menuAlwaysVisible: false,
    menuOptions: ['ASSISTANT', 'SYNC_OVERVIEW', 'SIGN_OUT'],
    hostApp: 'SharePoint',
  };

  // Load options once the widget is ready
  const timer = setInterval(() => {
    try {
      widget.options(options);
      clearInterval(timer);
    } catch (err) {
      //
    }
  }, 5);
</script>
```

Now you should see this:

![image](https://github.com/user-attachments/assets/ba3d0cdf-878f-4619-b9ca-c43d48e731a5)


### Auth

#### Providers
The widget can be configured to request sign on with a number of SSO providers or with user/pw. 

If exactly one SSO provider is specified, the widget will automatically open a popup and request user sign in with this method.

If more than one provider is specified or the specified provider is user/pw, the widget will show the sign-in screen when opened.

If a user is already stored in the session or local storage (see next section), no popup will be displayed.

#### Storage
The user credentials is per default stored in localstorage. It can also be set to session storage or no storage. If the latter is set, the widget will always request the user for login information.

### Events
The widget can request information from the host application by emitting events. These are described in this section.

#### Sync
When the `sync` event is fired the host application should provide a list with new documents since the lastSync dateTime described in the payload. Example:

```javascript
widget.addEventListener('sync', async (ev) => {
    const { lastSync } = ev.detail;

    // Fetch documents since last sync
    const list = await getDocs(lastSync); 

    // Send list back to widget
    widget.setSyncList(list);
})
```

#### List Organization Members
When the listOrganizationMembers event is fired the host application should provide a list of organization members. Example:

```javascript
widget.addEventListener('listOrganizationMembers', async () => {

    // Fetch organization members
    const list = await getMembers(); 

    // Send list back to widget
    widget.setOrganizationMembers(list);
})
```

#### List Project Members
When the listProjectMembers event is fired the host application should provide a list of project members. Example:

```javascript
widget.addEventListener('listProjectMembers', async () => {

    // Fetch project members
    const list = await getMembers(); 

    // Send list back to widget
    widget.setProjectMembers(list);
})
```

