# hexo-theme-Ada
Ada is an concise theme for Hexo.

[预览](https://shuirong.github.io/)

[已被Hexo.io收录](https://hexo.io/themes/)

功能少是少了点，但都是我觉得没有必要的,就没有加.
毕竟博客的第一要义是内容。(尽管至今没有什么干货...sigh)

---

![index](/screenshots/Ada1.png)
![content](/screenshots/Ada2.png)
![index2](/screenshots/Ada3.png)

---
# Install
Execute the following command under your `hexo` folder.

```
git clone https://github.com/shuiRong/hexo-theme-Ada.git themes/Ada
```
Then modify the property `theme` of the file `hexo/_config.yml`  to `theme: Ada`

And then execute the command `npm install hexo-renderer-jade --save` under your root bolg folder.

# Update
Execute the following command to update Ada.

```
cd themes/Ada
git pull
```

# After install
You should modify  `hexo/themes/Ada/_config.yml` file and `hexo/_config.yml` file before `hexo server` or `hexo deploy` your blog.
The folloing property is that you have to modify.

hexo/_config.yml :
```
title: 林水溶的博客
subtitle: 说点儿有用的
descripition: 一入编程深似海，从此妹子是路人

theme: Ada

```
hexo/themes/Ada/_config.yml :

```
logo: Life Is Short
github: https://github.com/shuiRong
zhihu: https://www.zhihu.com/people/shui-rong-10/

```

# Skills
原生CSS、原生JavaScript、Jade(Pug)模板

# PS

关于本项目或者其他的事，有任何想法都可以给我联系我.`