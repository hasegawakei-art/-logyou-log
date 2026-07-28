/* log you 公式スケジュール（公式サイトより取得）
   出典: https://logyou.asobisystem.com/live_information/schedule/list/
   更新方法: この配列を書き換えるだけ。id は「YYYY-MM-DD-N」（同日内の通し番号）で固定。
   type: LIVE / TV / RADIO / OTHER（特典会・お渡し会などは OTHER）
   ※参加率の計算は type:"LIVE" のみが対象
*/
window.LOGYOU_SCHEDULE_UPDATED = "2026-07-28";
window.LOGYOU_SCHEDULE = [
  // ===== 2025-11（デビュー） =====
  { id:"2025-11-15-1", date:"2025-11-15", type:"LIVE",  title:"PEAK SPOT JOIN Vol.1（デビュー公演）", venue:"恵比寿 LIQUIDROOM" },

  // ===== 2025-12 =====
  { id:"2025-12-09-1", date:"2025-12-09", type:"LIVE",  title:"MARQUEE祭 Vol.166", venue:"" },
  { id:"2025-12-10-1", date:"2025-12-10", type:"LIVE",  title:"TOKYO GIRLS GIRLS", venue:"" },
  { id:"2025-12-12-1", date:"2025-12-12", type:"RADIO", title:"ybsラジオ『髭男爵 山田ルイ53世のキックス』", venue:"" },
  { id:"2025-12-13-1", date:"2025-12-13", type:"TV",    title:"1DAY PASS めざせ満点サポーター/㈱さとふる編", venue:"" },
  { id:"2025-12-15-1", date:"2025-12-15", type:"LIVE",  title:"うるトラすフェスタ vol.40", venue:"" },
  { id:"2025-12-17-1", date:"2025-12-17", type:"LIVE",  title:"HYPE IDOL！年末大感謝無銭Special", venue:"" },
  { id:"2025-12-18-1", date:"2025-12-18", type:"LIVE",  title:"ふぉにコレ!vol.2 X'mas Special", venue:"" },
  { id:"2025-12-21-1", date:"2025-12-21", type:"LIVE",  title:"PEAK SPOT JOIN Vol.2 -Xmas SP-", venue:"" },
  { id:"2025-12-21-2", date:"2025-12-21", type:"LIVE",  title:"ONE AND ONLY Vol.28", venue:"" },
  { id:"2025-12-24-1", date:"2025-12-24", type:"LIVE",  title:"Appare!クリスマス2025", venue:"" },
  { id:"2025-12-26-1", date:"2025-12-26", type:"OTHER", title:"2ショットチャット会", venue:"" },
  { id:"2025-12-28-1", date:"2025-12-28", type:"LIVE",  title:"LEADING PREMIUM 年末感謝祭'25", venue:"" },
  { id:"2025-12-29-1", date:"2025-12-29", type:"TV",    title:"1DAY PASS めざせ満点サポーター", venue:"" },

  // ===== 2026-01 =====
  { id:"2026-01-05-1", date:"2026-01-05", type:"LIVE",  title:"PEAK SPOT JOIN Vol.3", venue:"" },
  { id:"2026-01-07-1", date:"2026-01-07", type:"LIVE",  title:"フクフェス番外編", venue:"" },
  { id:"2026-01-11-1", date:"2026-01-11", type:"LIVE",  title:"sound stock Vol.6", venue:"" },
  { id:"2026-01-12-1", date:"2026-01-12", type:"OTHER", title:"VDC Magazine 037 お渡し会&サイン会", venue:"" },
  { id:"2026-01-15-1", date:"2026-01-15", type:"LIVE",  title:"MARQUEE祭 vol.168", venue:"" },
  { id:"2026-01-17-1", date:"2026-01-17", type:"OTHER", title:"振袖2ショットチャット会", venue:"" },
  { id:"2026-01-17-2", date:"2026-01-17", type:"OTHER", title:"振袖オンライン特典会", venue:"" },
  { id:"2026-01-18-1", date:"2026-01-18", type:"LIVE",  title:"ッスッゴイライブ", venue:"" },
  { id:"2026-01-20-1", date:"2026-01-20", type:"LIVE",  title:"HANIKAMI Vol.1", venue:"" },
  { id:"2026-01-20-2", date:"2026-01-20", type:"LIVE",  title:"PEAK SPOT JOIN vol.4", venue:"" },
  { id:"2026-01-22-1", date:"2026-01-22", type:"LIVE",  title:"ONE AND ONLY Vol.29 SP", venue:"" },
  { id:"2026-01-24-1", date:"2026-01-24", type:"LIVE",  title:"miniちかっぱ祭ver.26.0 in NAGOYA", venue:"名古屋" },
  { id:"2026-01-25-1", date:"2026-01-25", type:"LIVE",  title:"EVOLUTION POP！ Vol.81", venue:"" },
  { id:"2026-01-27-1", date:"2026-01-27", type:"LIVE",  title:"UTAGE FES Vol.4", venue:"" },

  // ===== 2026-02 =====
  { id:"2026-02-01-1", date:"2026-02-01", type:"LIVE",  title:"sound stock Vol.7 × iCON DOLL LOUNGE 2026", venue:"" },
  { id:"2026-02-02-1", date:"2026-02-02", type:"LIVE",  title:"TOKYO GIRLS GIRLS", venue:"" },
  { id:"2026-02-03-1", date:"2026-02-03", type:"LIVE",  title:"EVOLUTION POP! Vol.81", venue:"" },
  { id:"2026-02-11-1", date:"2026-02-11", type:"LIVE",  title:"小浜菜摘生誕祭2026〜なちゃんにろぐいん!", venue:"" },
  { id:"2026-02-12-1", date:"2026-02-12", type:"LIVE",  title:"MARQUEE祭 vol.169", venue:"" },
  { id:"2026-02-18-1", date:"2026-02-18", type:"RADIO", title:"YBSラジオ『うるさごぜん』", venue:"" },
  { id:"2026-02-22-1", date:"2026-02-22", type:"LIVE",  title:"Merry Made vol.2 Happy Valentine!!", venue:"" },
  { id:"2026-02-25-1", date:"2026-02-25", type:"LIVE",  title:"HANIKAMI Vol.2", venue:"" },

  // ===== 2026-03 =====
  { id:"2026-03-03-1", date:"2026-03-03", type:"LIVE",  title:"ッスッゴイライブ -ひなまつりSP-", venue:"" },
  { id:"2026-03-05-1", date:"2026-03-05", type:"LIVE",  title:"MARQUEE祭 vol.171", venue:"" },
  { id:"2026-03-06-1", date:"2026-03-06", type:"LIVE",  title:"IDORISE!! FESTIVAL 2026 前夜祭", venue:"" },
  { id:"2026-03-07-1", date:"2026-03-07", type:"LIVE",  title:"IDORISE!! FESTIVAL 2026", venue:"" },
  { id:"2026-03-08-1", date:"2026-03-08", type:"LIVE",  title:"IDORISE!! FESTIVAL 2026", venue:"" },
  { id:"2026-03-13-1", date:"2026-03-13", type:"OTHER", title:"POP UP SHOP BY iCON DOLL LOUNGE 2026 〜SPRING COLLECTION〜", venue:"" },
  { id:"2026-03-13-2", date:"2026-03-13", type:"OTHER", title:"sound stock × iCON DOLL LOUNGE 2026", venue:"" },
  { id:"2026-03-14-1", date:"2026-03-14", type:"LIVE",  title:"ONE AND ONLY Vol.31", venue:"" },
  { id:"2026-03-15-1", date:"2026-03-15", type:"OTHER", title:"IDOL RUNWAY COLLECTION 2026", venue:"" },
  { id:"2026-03-21-1", date:"2026-03-21", type:"LIVE",  title:"BEEEEM FES Vol.2", venue:"" },
  { id:"2026-03-22-1", date:"2026-03-22", type:"LIVE",  title:"PEAK SPOT JOIN Vol.6 -東名阪 PEAK SPOT TOUR- 東京公演", venue:"東京" },
  { id:"2026-03-26-1", date:"2026-03-26", type:"LIVE",  title:"MARQUEE祭 Vol.172", venue:"" },
  { id:"2026-03-29-1", date:"2026-03-29", type:"LIVE",  title:"sound stock Vol.9", venue:"" },
  { id:"2026-03-31-1", date:"2026-03-31", type:"LIVE",  title:"LadySteady Premium 1周年SP", venue:"" },

  // ===== 2026-04 =====
  { id:"2026-04-01-1", date:"2026-04-01", type:"LIVE",  title:"超iLiVE! supported by refrear", venue:"" },
  { id:"2026-04-04-1", date:"2026-04-04", type:"LIVE",  title:"ONE AND ONLY Vol.32 NAGOYA SP", venue:"名古屋" },
  { id:"2026-04-05-1", date:"2026-04-05", type:"LIVE",  title:"ろぐゆーにろぐいん！〜でっかい奇跡巻き起こそ！〜", venue:"" },
  { id:"2026-04-09-1", date:"2026-04-09", type:"LIVE",  title:"HANiKAMi Vol.3", venue:"" },
  { id:"2026-04-13-1", date:"2026-04-13", type:"LIVE",  title:"sound stock Vol.10", venue:"" },
  { id:"2026-04-19-1", date:"2026-04-19", type:"LIVE",  title:"PEAK SPOT JOIN EXTRA", venue:"" },
  { id:"2026-04-26-1", date:"2026-04-26", type:"LIVE",  title:"福本れみ生誕祭2026〜Welcome to Remiland〜", venue:"" },
  { id:"2026-04-27-1", date:"2026-04-27", type:"LIVE",  title:"MARQUEE祭 vol.174", venue:"" },
  { id:"2026-04-30-1", date:"2026-04-30", type:"LIVE",  title:"JAPAN IDOL SUPER LIVE 2026", venue:"" },

  // ===== 2026-05 =====
  { id:"2026-05-03-1", date:"2026-05-03", type:"LIVE",  title:"PEAK SPOT JOIN Vol.8", venue:"" },
  { id:"2026-05-05-1", date:"2026-05-05", type:"LIVE",  title:"歌舞伎町UP GATE↑↑2026", venue:"歌舞伎町" },
  { id:"2026-05-10-1", date:"2026-05-10", type:"LIVE",  title:"MAWA LOOP OSAKA 2026", venue:"大阪" },
  { id:"2026-05-16-1", date:"2026-05-16", type:"LIVE",  title:"TIF ASIA TOUR 2026 in TOKYO", venue:"東京" },
  { id:"2026-05-17-1", date:"2026-05-17", type:"LIVE",  title:"マリアージュ vol.1 ＜Lunch Time＞", venue:"" },
  { id:"2026-05-20-1", date:"2026-05-20", type:"LIVE",  title:"MARQUEE Fes day2", venue:"" },
  { id:"2026-05-23-1", date:"2026-05-23", type:"LIVE",  title:"Merry Made Vol.3", venue:"" },
  { id:"2026-05-28-1", date:"2026-05-28", type:"LIVE",  title:"MARQUEE祭 vol.175", venue:"" },

  // ===== 2026-06 =====
  { id:"2026-06-01-1", date:"2026-06-01", type:"LIVE",  title:"sound stock Vol.12", venue:"" },
  { id:"2026-06-04-1", date:"2026-06-04", type:"LIVE",  title:"THE ORCHESTRA TOKYO主催公演『楠ろあ生誕祭2026』", venue:"" },
  { id:"2026-06-10-1", date:"2026-06-10", type:"LIVE",  title:"log you 1stワンマンライブ〜call you log〜", venue:"Spotify O-EAST" },
  { id:"2026-06-11-1", date:"2026-06-11", type:"RADIO", title:"FM NACK5『FAV FOUR』", venue:"" },
  { id:"2026-06-14-1", date:"2026-06-14", type:"OTHER", title:"KAWAII LAB.&PEAK SPOT 大特典会", venue:"" },
  { id:"2026-06-18-1", date:"2026-06-18", type:"LIVE",  title:"MARQUEE祭 vol.176", venue:"" },
  { id:"2026-06-21-1", date:"2026-06-21", type:"LIVE",  title:"ちゃやまちアイドルパーク2026", venue:"大阪・茶屋町" },
  { id:"2026-06-21-2", date:"2026-06-21", type:"RADIO", title:"PEAK SPOT RADIO in ちゃいぱ", venue:"" },
  { id:"2026-06-27-1", date:"2026-06-27", type:"LIVE",  title:"UP-T presents HERO SONIC 2026", venue:"" },
  { id:"2026-06-27-2", date:"2026-06-27", type:"TV",    title:"まるどりっ！UP", venue:"" },

  // ===== 2026-07 =====
  { id:"2026-07-09-1", date:"2026-07-09", type:"LIVE",  title:"MARQUEE祭 Vol.178", venue:"" },
  { id:"2026-07-11-1", date:"2026-07-11", type:"LIVE",  title:"SPARK 2026 渋谷納涼祭", venue:"渋谷" },
  { id:"2026-07-11-2", date:"2026-07-11", type:"LIVE",  title:"GMO 渋谷エンタメ祭2026 JAMEエンタメステージ", venue:"渋谷" },
  { id:"2026-07-12-1", date:"2026-07-12", type:"TV",    title:"カバン持ちさせてください★アイドル【log you】のお手伝い！", venue:"" },
  { id:"2026-07-12-2", date:"2026-07-12", type:"RADIO", title:"原口あきまさとlog youのそれ！頂きっ", venue:"" },
  { id:"2026-07-14-1", date:"2026-07-14", type:"LIVE",  title:"うるトラすフェスタ vol.45", venue:"" },
  { id:"2026-07-15-1", date:"2026-07-15", type:"LIVE",  title:"ONE AND ONLY 2nd Anniversary day1", venue:"" },
  { id:"2026-07-18-1", date:"2026-07-18", type:"LIVE",  title:"ッスッゴイライブ", venue:"" },
  { id:"2026-07-19-1", date:"2026-07-19", type:"LIVE",  title:"OMUTA BIG FESTIVAL 2026", venue:"福岡・大牟田" },
  { id:"2026-07-19-2", date:"2026-07-19", type:"RADIO", title:"原口あきまさとlog youのそれ！頂きっ", venue:"" },
  { id:"2026-07-20-1", date:"2026-07-20", type:"LIVE",  title:"Fuku Kawa Gig", venue:"" },
  { id:"2026-07-20-2", date:"2026-07-20", type:"OTHER", title:"推しサマDAYS 配信スタート", venue:"" },
  { id:"2026-07-22-1", date:"2026-07-22", type:"LIVE",  title:"UTAGE FES Vol.5", venue:"" },
  { id:"2026-07-25-1", date:"2026-07-25", type:"LIVE",  title:"PEAK SPOT JOIN Vol.9 -summer special-", venue:"" },
  { id:"2026-07-26-1", date:"2026-07-26", type:"LIVE",  title:"六本木アイドルフェスティバル2026", venue:"六本木" },
  { id:"2026-07-29-1", date:"2026-07-29", type:"LIVE",  title:"もしもの世界 -夏-", venue:"" },
  { id:"2026-07-31-1", date:"2026-07-31", type:"LIVE",  title:"TOKYO IDOL FESTIVAL 2026 (Day1)", venue:"お台場" },

  // ===== 2026-08 =====
  { id:"2026-08-02-1", date:"2026-08-02", type:"LIVE",  title:"TOKYO IDOL FESTIVAL 2026 (Day3)", venue:"お台場" }
];
