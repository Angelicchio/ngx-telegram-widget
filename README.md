# NgxTelegramWidget

Compatible with Angular 14.0.0. This component allows you to implement the Telegram Login Widget without messing up with your code by dynamically inserting scripts.

# Installation

## NPM
```shell
npm install ngx-telegram-widget
```

# Usage

Import it in a module:

```js
import { NgxTelegramWidgetModule }  from 'ngx-telegram-widget';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    NgxTelegramWidgetModule
  ],
```

Use the component like this:

```js
<ngx-telegram-widget
  [botName]="'SampleBot'"
  [buttonSize]="'large'"
  [showUserPhoto]="true"
  [redirectURL]="'login-with-telegram'">
</ngx-telegram-widget>
```

# API

## Inputs
| Input  | Type | Default | Required | Description |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| botName | string | ```"SampleBot"``` | yes | Your Telegram BOT's name |
| buttonSize | string | ```"large"``` | no | Button size (possible values: ```large```, ```medium```, ```small```) |
| showUserPhoto | boolean | ```false``` | no | Choose whether to show the user profile picture near the button or not |
| useCustomCorners | boolean | ```false``` | no | Choose whether to use custom round corners or not |
| cornerRadius | number | ```20``` | no | Corner radius: applies only if useCustomCorners is ```true``` |
| requestMessageAccess | boolean | ```false``` | no | If ```true```, it allows your Telegram BOT to send messages to the user (if the user allows you to) |
| redirectURL | string | ```''``` | yes | URL to redirect the user to, after a successful auth |

# Local usage

Use ```/setdomain``` on @BotFather to set a custom domain (example: ```telegram-login.local```)

Register in your ```hosts``` file a new DNS entry for ```telegram-login.local```, pointing to ```127.0.0.1```.

Start ```ng serve``` with the following parameters: ```--host telegram-login.local --port 80```. You must start the server on port 80 or 443 for the login button to work, due to Telegram Content Security Policies.