# シス研 webサイト([sysken.net](](https://www.sysken.net/)))

このサイトは 「**個人の管理下に置くのは許されない**」 という信念のもと制作しています。  
esaをCMSとしていますが、Markdownファイルはもちろん、
esaにアップロードされた画像も全てダウンロードしGitHubで管理するようにしています。

## 個人の管理下に置くのは許されない

個人の管理下に置かれた場合、その人の酌量次第によってはコンテンツにアクセスできない、削除されるといったことが懸念されます。それは今後のシス研の歴史が失われることになります。このような事態を防ぐためにも、このサイトのコンテンツは全てシス研の管理下に置くべきです。

シス研の管理下というのは、GitHubのシス研のOrganizationに置くことが最も望ましいです。
場合によってはシス研のアカウントで管理されるクラウドサービスを利用することもあります。
ただし、シス研のサーバーだけに置くのは望ましくありません。この場合、大学の停電等によりサーバーが一時停止するとすると、リソースにアクセス出来なくなる可能性があるためです。また、今後サーバーを引き継げる人がいなくなった場合など、サーバーの管理ができなくなる可能性があるためです。

## セットアップ
### 依存関係のインストール
```bash
pnpm install
```

### ローカルサーバーの起動
```bash
pnpm dev
```

# LICENSE
[MIT](./LICENSE)
