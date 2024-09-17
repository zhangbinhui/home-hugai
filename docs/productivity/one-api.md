# One API 中转服务

::: tip 最新动态 2024-09-13

- OpenAI家最新的 o1-preview 和 o1-mini 模型因为我两个号的等级都还不够，暂不支持，但应该快了。。。

- 已支持OpenAI家的 **gpt-4o, gpt-4o-mini**；

- 已支持Anthropic家的claude-3.5-sonnet-20240620,claude-3-opus-20240229, claude-3-sonnet-20240229, claude-3-haiku-20240307；

- 之前大家在小店购买的sk-开头的key，还未用完的，可以将剩余的额度转入新的中转服务额度中，在公众号后台私信我或者加微信：niu_bilibili，麻烦各位尊贵的尊享GPT用户了。🙏🙏🙏

:::

❇️ 欢迎使用 Ai自强少年 提供的One API中转服务，当前支持 **OpenAI** 和**Anthropic** 的官方接口，后续考虑接入更多主流大模型。

⚠️ 本服务没有特色，稳定不折腾，旨在为网络或者支付困难的用户提供便利。折腾过就会确信：**时间就是金钱，稳定压倒一切**。

💡 你可以先在[中转服务](https://one-api.aiporters.com/)注册一个账号，有 **$0.1** 的体验额度，进入 [控制台]->[令牌]->[新建令牌] 后就可以在内置的 👉[尊享 GPT](https://next.aiporters.com/) 中使用：

<iframe src="https://one-api.aiporters.com/video/chat_entry.mp4" allow="fullscreen" allowfullscreen="" width="800" height="450" style="border:0"></iframe>

🚦 网络环境：各地连接速度不同，如无法访问说明缘分未到，不勉强；若是钢铁般的需求，请在微信公众号私信联系。

## 这是什么？

由于 OpenAI 等一众国外的大模型厂商对国内用户做了限制，导致国内用户很难轻松使用 ChatGPT 类服务，很多基于 ChatGPT 的聊天软件，比如：

- ChatGPT Next Web

- ChatGPT Web

- 沉浸式翻译

- 以及各种各样的浏览器插件

同时大模型开发使用的 langchain、llamaindex 等库，往往需要用户传入 OpenAI API Key，但在很多情况下，国内的网络状况都不允许直连 **api.openai.com** （OpenAI 的 API 端口），所以我提供了此中转服务，它的特点：

- 稳定：我应该不会轻易跑路，毕竟这玩意儿也赚不了几个钱，只是用于维持公众号的日常运营；

- 方便：所有用到 OpenAI API 的地方都可以无缝替代；

- 快速：我会持续优化中转服务的线路速度，来保证使用体验；

- 省心：没有包月，没有会员，没有限时，用多少买多少，不用担心过期。

## 为什么要提供这个中转服务？

我在公众号上提供的三个免费项目[鲁树人 GPT](../free/lushuren.md), [原味 GPT(已停服)](../free/pandora.md) 和 [简洁 GPT(已停服)](../free/simple.md) 吸引了不少用户。然而，随着项目的功能稳定，来自文章的赞赏日益减少，而服务器，域名，网络都是需要持续投入的。

所以决定再为有API使用需求的用户们提供主流大模型的官方 API 中转服务，这样大家无需折腾繁琐的账号注册和缴费流程，就能用与官方相同的价格使用各家大模型的 API。

## 目前支持哪些模型？

### OpenAI 

![image.png](oneapi/oai-models.png)

### Anthropic Claude

![image.png](oneapi/Anthropic-models.png)

## 后续还会支持哪些模型？

主要参考: [LMSYS 聊天机器人竞技场排行榜](https://chat.lmsys.org/?leaderboard) 

![image.png](oneapi/leaderboard.png)

## 如何使用？

### 账号->令牌->额度

1. 打开[oneapi中转服务: https://one-api.aiporters.com/](https://one-api.aiporters.com/)

2. 右上角找到登录按钮，进入注册页面，先注册一个账号；

![image.png](oneapi/login.png)

![image.png](oneapi/register.png)


3. 注册成功后，登录系统，进入**总览**页面，可以看到 $0.1 的体验额度；

![image.png](oneapi/overview.png)

4. 进入**令牌**页面->**新建令牌**->设置名称及是否限制令牌额度

![image.png](oneapi/create-key1.png)

![image.png](oneapi/create-key2.png)

5. 令牌创建成功后，可以直接点击右边的**聊天**按钮，进入内置的尊享GPT使用；

![image.png](oneapi/chat-entry.png)

系统会自动将令牌 和 中转地址填入尊享GPT中，这样就无需手工填写，直接开聊；

![image.png](oneapi/enter-key.png)

::: tip 小提示

1. 正式使用之前，先打开设置页面

2. 可以在在模型列表中选择你默认使用的模型；

3. 建议把 注入系统级提示信息 的勾选去掉，这个会影响自定义模型的使用；

:::

![image.png](oneapi/before-chat.png)

6. 如果额度用完了，进入**充值**页面，点击**获取兑换码**，进入[AI自强少年的小店](https://shop.wehugai.com), 购买对应额度的兑换码充值即可；

![image.png](oneapi/charge1.png)

![image.png](oneapi/charge2.png)


### 在内置的 尊享 GPT 中使用

再看一遍这个10秒的视频吧：

<iframe src="https://one-api.aiporters.com/video/chat_entry.mp4" allow="fullscreen" allowfullscreen="" width="800" height="450" style="border:0"></iframe>

### 如果你是开发者

请查阅 OpenAI 官方 API 文档：[platform.openai.com](https://platform.openai.com/docs/api-reference/completions/create)

使用时将官方文档中所有的 `https://api.openai.com` 替换为本服务提供的中转地址：**`https://one-api.aiporters.com`**

接口用法与 OpenAI 官方 API 完全一致。

在开始使用之前，你需要用到以下信息：

```Plain Text
中转接口地址：https://one-api.aiporters.com/openai
中转 API 令牌：sk-xxxxxxxxx
```

##### [Create chat completion](https://platform.openai.com/docs/api-reference/chat/create)

```bash
curl https://one-api.aiporters.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sk-你的令牌" \
  -d '{
    "model": "gpt-4-turbo",
    "messages": [
      {
        "role": "system",
        "content": "You are a helpful assistant."
      },
      {
        "role": "user",
        "content": "say: 你可真是个天才！"
      }
    ]
  }'

```

![image.png](oneapi/curl-chat.png)

##### [Create speech](https://platform.openai.com/docs/api-reference/audio/createSpeech)

```bash
curl https://one-api.aiporters.com/v1/audio/speech \
  -H "Authorization: Bearer sk-你的令牌" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "tts-1",
    "input": "我可真是个天才！",
    "voice": "alloy"
  }' \
  --output speech.mp3
```

![image.png](oneapi/curl-tts1.png)

##### [Create transcription](https://platform.openai.com/docs/api-reference/audio/createTranscription)

```bash
curl https://one-api.aiporters.com/v1/audio/transcriptions \
  -H "Authorization: Bearer sk-你的令牌" \
  -H "Content-Type: multipart/form-data" \
  -F file="@./speech.mp3" \
  -F model="whisper-1"
```

![image.png](oneapi/curl-whisper-1.png)

##### [Create image](https://platform.openai.com/docs/api-reference/images/create)

```bash
curl https://one-api.aiporters.com/v1/images/generations \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sk-你的令牌" \
  -d '{
    "model": "dall-e-3",
    "prompt": "一只可爱的小哈士奇",
    "n": 1,
    "size": "1024x1024"
  }'

```

![image.png](oneapi/curl-dalle3.png)


##### 读图
```bash
curl https://one-api.aiporters.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sk-你的令牌" \
  -d '{
    "model": "gpt-4-turbo",
    "messages": [
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": "这个图里有什么?"
          },
          {
            "type": "image_url",
            "image_url": {
              "url": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-O1j0nH5zGYWWeO1hEN30fciJ/user-8XRyOEvkrogdXJE41rHAN0KD/img-PvH2Z40Tkbi7fgnwMQTGzops.png?st=2024-04-12T10%3A15%3A11Z&se=2024-04-12T12%3A15%3A11Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-04-12T07%3A22%3A01Z&ske=2024-04-13T07%3A22%3A01Z&sks=b&skv=2021-08-06&sig=aEYwNTR6HHaml8rQ2tKvXoh3mkvHBljI63%2B16pKmkXY%3D"
            }
          }
        ]
      }
    ],
    "max_tokens": 300
  }'
```

![image.png](oneapi/curl-gpt-4v.png)


### 在沉浸式翻译中使用

使用下方地址作为 API URL，API Key 使用 sk- 即可。

```Plain Text
https://one-api.aiporters.com/openai/v1/chat/completions
```

## 定价规则

### 什么是 token？

Token 是大语言模型处理信息的最小单元，它介于“字”和“词”之间，你可以用下方的网址，来计算一段文字会变成多少 token：

[gpt-tokenizer playground](https://gpt-tokenizer.dev/)

![image.png](oneapi/image-6.png)

大部分情况下，你都可以使用 1 汉字 = 2 token 来近似估算中文聊天的中文所需 token 数。

### 定价规则

参考[OpenAI 官网给出的定价](https://openai.com/pricing)

参考[Anthropic 官网给出的定价](https://www.anthropic.com/api)

中转服务与官方保持一致，由one-api项目统一维护，童叟无欺；

可以在日志界面查看每次调用消耗的情况：

![image.png](oneapi/log.png)



## 用户协议

付款即视为同意本协议！否则请不要付款！

1. 本服务不会以任何形式持久化存储任何用户的任何聊天信息；

2. 本服务不知晓也无从知晓用户在本服务上传输的任何文本内容，用户使用本服务引发的任何违法犯罪后果，由使用者承担，本服务将全力配合由此可能引起的相关调查；

3. 用户在平台上的任何付款行为，均视为对公众号运营的捐赠行为，并不与本服务构成交易，也不存在任何法律意义上的合同或契约关系；

4. 本服务视为开源项目 ChatGPT Next Web 项目以及相关项目的辅助调试工具，请勿用于其他用途；

5. 请自觉遵守《生成式人工智能服务管理暂行办法》 。