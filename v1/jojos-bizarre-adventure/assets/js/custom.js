var path = window.location.pathname;
var page = path.split("/").pop();
pageNumber = page.slice(0, page.length - 5);

shortUrl = pageNumber + ".html";
length = shortUrl.length *= -1;
var url = window.location.pathname + window.location.search;
season = url.slice(42, length);

animeName = "Jojo's Bizarre Adventure";
$(".title")[0].innerHTML = animeName;
document.title = animeName + " - VoirAnimes";

$('a[href="/v1/voir-animes/jojos-bizarre-adventure/"]')[2].innerHTML = "<div class='object active'> Jojo's Bizarre Adventure </div>";

$("#previous-ep")[0].href = Number(pageNumber) - 1 + ".html";
$("#next-ep")[0].href = Number(pageNumber) + 1 + ".html";

$("#en-sub")[0].src = "/assets/streaming-files/voir-animes/jojos-bizarre-adventure/sub/" + season + pageNumber + "-en.vtt";
$("#fr-sub")[0].src = "/assets/streaming-files/voir-animes/jojos-bizarre-adventure/sub/" + season + pageNumber + "-fr.vtt";

localStorage.setItem("watchJBA", pageNumber);
localStorage.setItem("PathWatchJBA", path);

const episodesS1 = {
  1: "https://link.eu1.storjshare.io/juyyjwmwt3iqzzy6a72dgtlvnhma/voir-animes/jojo/Jojo%20S01%20-%2001%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  2: "https://link.eu1.storjshare.io/jvee7n73guaslqlx6umx6do2s2rq/voir-animes/jojo/Jojo%20S01%20-%2002%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  3: "https://link.eu1.storjshare.io/jufvgd4lptgrhfwavmhvzyyjtuha/voir-animes/jojo/Jojo%20S01%20-%2003%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  4: "https://link.eu1.storjshare.io/jx2c6mjlbd35abr6ogw6oti6lcja/voir-animes/jojo/Jojo%20S01%20-%2004%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  5: "https://link.eu1.storjshare.io/jupsgcarkypenrn2es5ubtjy7dza/voir-animes/jojo/Jojo%20S01%20-%2005%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  6: "https://link.eu1.storjshare.io/jxg6ftzmm7mu4y6pgni2wnebuc4a/voir-animes/jojo/Jojo%20S01%20-%2006%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  7: "https://link.eu1.storjshare.io/jwrzb3mn7ttoddrwlptpjuiipcwq/voir-animes/jojo/Jojo%20S01%20-%2007%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  8: "https://link.eu1.storjshare.io/ju5tmrqql5fqblsn73x6i723y2sq/voir-animes/jojo/Jojo%20S01%20-%2008%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  9: "https://link.eu1.storjshare.io/jvsi7jhtskboe4aajztxvrgh5e3a/voir-animes/jojo/Jojo%20S01%20-%2009%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  10: "https://link.eu1.storjshare.io/jwwqb3ietrmw5gy243km4u6r2tna/voir-animes/jojo/Jojo%20S01%20-%2010%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  11: "https://link.eu1.storjshare.io/jw2tkcga7ebqaewx5nwturlizg2q/voir-animes/jojo/Jojo%20S01%20-%2011%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  12: "https://link.eu1.storjshare.io/jutvd6xdlgwt4vsljj5qxywb6rma/voir-animes/jojo/Jojo%20S01%20-%2012%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  13: "https://link.eu1.storjshare.io/jxnj2rb6kj4tmzevbylzr46q7cna/voir-animes/jojo/Jojo%20S01%20-%2013%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  14: "https://link.eu1.storjshare.io/jwwupigvua6lhcvi32nlyj7jbg2a/voir-animes/jojo/Jojo%20S01%20-%2014%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  15: "https://link.eu1.storjshare.io/jud4k2y5kfavtc6stbx4wsmgkbna/voir-animes/jojo/Jojo%20S01%20-%2015%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  16: "https://link.eu1.storjshare.io/jvynras33w5a5a62p6uojzrof6yq/voir-animes/jojo/Jojo%20S01%20-%2016%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  17: "https://link.eu1.storjshare.io/jwpndezoypfx3ag6zps44qtvlreq/voir-animes/jojo/Jojo%20S01%20-%2017%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  18: "https://link.eu1.storjshare.io/jw3mxwis4mboj6vcmwymvemgctka/voir-animes/jojo/Jojo%20S01%20-%2018%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  19: "https://link.eu1.storjshare.io/jvfhc4zkpeywthe5tdjhmydwsnla/voir-animes/jojo/Jojo%20S01%20-%2019%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  20: "https://link.eu1.storjshare.io/jweapdz6zz6jzab4o5ldetio352a/voir-animes/jojo/Jojo%20S01%20-%2020%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  21: "https://link.eu1.storjshare.io/jukjhkixx2vx2j72bxid4agv4ljq/voir-animes/jojo/Jojo%20S01%20-%2021%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  22: "https://link.eu1.storjshare.io/jxis5trnhtmo4fqkkzaqnpuy6sxa/voir-animes/jojo/Jojo%20S01%20-%2022%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  23: "https://link.eu1.storjshare.io/jvuhsz2xb5jfrjzdetkyiqfafx5q/voir-animes/jojo/Jojo%20S01%20-%2023%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  24: "https://link.eu1.storjshare.io/jwngjpx6ravjmuokipc4tyvphuyq/voir-animes/jojo/Jojo%20S01%20-%2024%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  25: "https://link.eu1.storjshare.io/jvsv6cn6fapzgv7rg65bit7ydhra/voir-animes/jojo/Jojo%20S01%20-%2025%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  26: "https://link.eu1.storjshare.io/jv6rf4fo3lqo24mad3576oewc3pa/voir-animes/jojo/Jojo%20S01%20-%2026%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
};

const episodesS2 = {
  1: "https://link.eu1.storjshare.io/jvb6m3g2buz7sqyxovsegqhnyhsa/voir-animes/jojo/Jojo%20S02%20-%2001%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  2: "https://link.eu1.storjshare.io/jw65xiny5z4fd4ccvzwbibwhxu4a/voir-animes/jojo/Jojo%20S02%20-%2002%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  3: "https://link.eu1.storjshare.io/jw5jirbjqptpfxarxfnbggwfly5q/voir-animes/jojo/Jojo%20S02%20-%2003%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  4: "https://link.eu1.storjshare.io/jwxcswyzdlck7f6hch6vqnbze2va/voir-animes/jojo/Jojo%20S02%20-%2004%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  5: "https://link.eu1.storjshare.io/juj3wjcsqpsw3lxb4yxxxjcr36ya/voir-animes/jojo/Jojo%20S02%20-%2005%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  6: "https://link.eu1.storjshare.io/jvub2ulqk6v7qt4lvfikgip4mupq/voir-animes/jojo/Jojo%20S02%20-%2006%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  7: "https://link.eu1.storjshare.io/jvfiupxif7in7ms5p2bkhjdebxpq/voir-animes/jojo/Jojo%20S02%20-%2007%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  8: "https://link.eu1.storjshare.io/jwn3quakcz2utt4c5gj3764qnsuq/voir-animes/jojo/Jojo%20S02%20-%2008%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  9: "https://link.eu1.storjshare.io/jx4eisbm4g3gvqdlhue25p4yxmpq/voir-animes/jojo/Jojo%20S02%20-%2009%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  10: "https://link.eu1.storjshare.io/judyfkbgpvhv5jzga2jvy472aeja/voir-animes/jojo/Jojo%20S02%20-%2010%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  11: "https://link.eu1.storjshare.io/jwi3cd6jgnpdrzqtzwrfr5sozl7q/voir-animes/jojo/Jojo%20S02%20-%2011%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  12: "https://link.eu1.storjshare.io/ju2mj7l46kkppqinoyvuf3widn5a/voir-animes/jojo/Jojo%20S02%20-%2012%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  13: "https://link.eu1.storjshare.io/jwpw6pg2uxbgzyzwhjcuzy2oe5rq/voir-animes/jojo/Jojo%20S02%20-%2013%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  14: "https://link.eu1.storjshare.io/jwpw6pg2uxbgzyzwhjcuzy2oe5rq/voir-animes/jojo/Jojo%20S02%20-%2013%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  15: "https://link.eu1.storjshare.io/jw4r3s7iptk56lp72lgqk5grgkfq/voir-animes/jojo/Jojo%20S02%20-%2014%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  16: "https://link.eu1.storjshare.io/jxlnszbrlms3bxrmwrncdzinofea/voir-animes/jojo/Jojo%20S02%20-%2016%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  17: "https://link.eu1.storjshare.io/jw64cxkjhjfpxkeeawz2rvsu4alq/voir-animes/jojo/Jojo%20S02%20-%2017%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  18: "https://link.eu1.storjshare.io/jxstfkadyjleym5sleibfkyfie5a/voir-animes/jojo/Jojo%20S02%20-%2018%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  19: "https://link.eu1.storjshare.io/jwqykqlrkl23n7ws5y6cbr5svkba/voir-animes/jojo/Jojo%20S02%20-%2019%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  20: "https://link.eu1.storjshare.io/jxwpcsocj5tcqprkbtgjwtuqucba/voir-animes/jojo/Jojo%20S02%20-%2020%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  21: "https://link.eu1.storjshare.io/jx2rqtr4hvdgjz5x5ddwssyx4k5a/voir-animes/jojo/Jojo%20S02%20-%2021%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  22: "https://link.eu1.storjshare.io/jvmb4ozblt77guo52cskrnilqr3a/voir-animes/jojo/Jojo%20S02%20-%2022%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  23: "https://link.eu1.storjshare.io/jxqa3ieivf3dnip3px7pxusqb54q/voir-animes/jojo/Jojo%20S02%20-%2023%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  24: "https://link.eu1.storjshare.io/ju7uo74zif66qrdyvozknihey4bq/voir-animes/jojo/Jojo%20S02%20-%2024%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  25: "https://link.eu1.storjshare.io/jw34qsx7bqdsq55qgj6gck44pmza/voir-animes/jojo/Jojo%20S02%20-%2025%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  26: "https://link.eu1.storjshare.io/jxnodzxxew3iv5ffcopzr5tok3oa/voir-animes/jojo/Jojo%20S02%20-%2026%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  27: "https://link.eu1.storjshare.io/jveq63hah2hboy4oquxauijoixna/voir-animes/jojo/Jojo%20S02%20-%2027%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  28: "https://link.eu1.storjshare.io/jxdchvj2e4apt57as6rvqrqztluq/voir-animes/jojo/Jojo%20S02%20-%2028%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  29: "https://link.eu1.storjshare.io/jwe4v26duvrc3o4jqbszt344w3pq/voir-animes/jojo/Jojo%20S02%20-%2029%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  30: "https://link.eu1.storjshare.io/jx7no6gw3xzxeqqpa7vguwlazuwa/voir-animes/jojo/Jojo%20S02%20-%2030%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  31: "https://link.eu1.storjshare.io/jxaw2rmtufqbdi5qrsceicvbgvfq/voir-animes/jojo/Jojo%20S02%20-%2031%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  32: "https://link.eu1.storjshare.io/jwrdsprvgffurapdln74qvqbu7ga/voir-animes/jojo/Jojo%20S02%20-%2032%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  33: "https://link.eu1.storjshare.io/jwjdotqkkwcz6eamkkftjopmcf6q/voir-animes/jojo/Jojo%20S02%20-%2033%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  34: "https://link.eu1.storjshare.io/jx3cu2hi7js2ebzctjegmw6fwbeq/voir-animes/jojo/Jojo%20S02%20-%2034%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  35: "https://link.eu1.storjshare.io/jxz7ee3wokom25kebozufog47mzq/voir-animes/jojo/Jojo%20S02%20-%2035%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  36: "https://link.eu1.storjshare.io/jwfrtdwjcov4e56fqlnjpzipuw5q/voir-animes/jojo/Jojo%20S02%20-%2036%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  37: "https://link.eu1.storjshare.io/jwlsq3wzvmeip4f5tgzeph7iqkya/voir-animes/jojo/Jojo%20S02%20-%2037%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  38: "https://link.eu1.storjshare.io/jwvepd337wv75rlswzi2djthxacq/voir-animes/jojo/Jojo%20S02%20-%2038%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  39: "https://link.eu1.storjshare.io/jujt47zg6g7wmvewrxoddizp6xaq/voir-animes/jojo/Jojo%20S02%20-%2039%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  40: "https://link.eu1.storjshare.io/jxf6rvaz4zxe3s4ifmrga4dbrc4a/voir-animes/jojo/Jojo%20S02%20-%2040%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  41: "https://link.eu1.storjshare.io/jvtxdlu74lxhczovqhmrhcbvgx6a/voir-animes/jojo/Jojo%20S02%20-%2041%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  42: "https://link.eu1.storjshare.io/jxp2mdifzctnoi22gkvkntpgdbma/voir-animes/jojo/Jojo%20S02%20-%2042%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  43: "https://link.eu1.storjshare.io/jxnfgx5b3moyicn75yhcb7fmqrbq/voir-animes/jojo/Jojo%20S02%20-%2043%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  44: "https://link.eu1.storjshare.io/jxxkjozskl2fkoinuhqk7gsfaozq/voir-animes/jojo/Jojo%20S02%20-%2044%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  45: "https://link.eu1.storjshare.io/jwjuxla4ub34zzqf3qvlbzhz6q3q/voir-animes/jojo/Jojo%20S02%20-%2045%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  46: "https://link.eu1.storjshare.io/jwqgs27tgtyp7qcs2sjkbnwc7mha/voir-animes/jojo/Jojo%20S02%20-%2046%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  47: "https://link.eu1.storjshare.io/jwc6bdee5yc3ks2uwftclsvwgqsq/voir-animes/jojo/Jojo%20S02%20-%2047%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  48: "https://link.eu1.storjshare.io/jvw47rky5gf36wy67unljjy6o2ha/voir-animes/jojo/Jojo%20S02%20-%2048%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
};

const episodesS3 = {
  1: "https://link.eu1.storjshare.io/jwrcasdya6xjkxn5j7nxbm3s454a/voir-animes/jojo/Jojo%20S03%20-%2001%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  2: "https://link.eu1.storjshare.io/jub67o5khvcjua7zkuphlncg6x7q/voir-animes/jojo/Jojo%20S03%20-%2002%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  3: "https://link.eu1.storjshare.io/jw2gqe4eli3zotkwaqlx3j7az5uq/voir-animes/jojo/Jojo%20S03%20-%2003%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  4: "https://link.eu1.storjshare.io/jwldryi2zzx332hyecitygrqe6qq/voir-animes/jojo/Jojo%20S03%20-%2004%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  5: "https://link.eu1.storjshare.io/jwpvotlnpfq6sg2bw2t22yqfa2oa/voir-animes/jojo/Jojo%20S03%20-%2005%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  6: "https://link.eu1.storjshare.io/jxxmbuboodydau7ouy35xzjk7oja/voir-animes/jojo/Jojo%20S03%20-%2006%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  7: "https://link.eu1.storjshare.io/jwux32h2fvdexgncmcbgqikegyjq/voir-animes/jojo/Jojo%20S03%20-%2007%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  8: "https://link.eu1.storjshare.io/jviagea6g2qlq3mqpj5x2eawvdea/voir-animes/jojo/Jojo%20S03%20-%2008%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  9: "https://link.eu1.storjshare.io/jwj6uj2755255vtaiaedt5q7dn2q/voir-animes/jojo/Jojo%20S03%20-%2009%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  10: "https://link.eu1.storjshare.io/jwrusddvwp7knhu4r75e2vqxpjea/voir-animes/jojo/Jojo%20S03%20-%2010%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  11: "https://link.eu1.storjshare.io/jx6iikubb4wjosu7fibztflnd27a/voir-animes/jojo/Jojo%20S03%20-%2011%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  12: "https://link.eu1.storjshare.io/jvabawxazsitigtppcwoxz3edexq/voir-animes/jojo/Jojo%20S03%20-%2012%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  13: "https://link.eu1.storjshare.io/jxzl3553un6hr7zjbmexvfuv7oeq/voir-animes/jojo/Jojo%20S03%20-%2013%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  14: "https://link.eu1.storjshare.io/jxzesbqltbpcl675nic7p43u6xdq/voir-animes/jojo/Jojo%20S03%20-%2014%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  15: "https://link.eu1.storjshare.io/jvuptqg2acjmade74kwoxdnjubkq/voir-animes/jojo/Jojo%20S03%20-%2015%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  16: "https://link.eu1.storjshare.io/jwbfsoh6ur2llvxxhx7bn2dfgz4a/voir-animes/jojo/Jojo%20S03%20-%2016%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  17: "https://link.eu1.storjshare.io/jvsykku7t2ecyen2maqrmseujasa/voir-animes/jojo/Jojo%20S03%20-%2017%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  18: "https://link.eu1.storjshare.io/jxzwf5xqvzybixmagj24bo3ktbvq/voir-animes/jojo/Jojo%20S03%20-%2018%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  19: "https://link.eu1.storjshare.io/jxa2xjqlsngpwvpl27qpumf7ylaq/voir-animes/jojo/Jojo%20S03%20-%2019%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  20: "https://link.eu1.storjshare.io/jvpsy4dupikicggqd6kgqpgsy6pa/voir-animes/jojo/Jojo%20S03%20-%2020%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  21: "https://link.eu1.storjshare.io/juao5qwhsawwsyuicrk4ctjxxfya/voir-animes/jojo/Jojo%20S03%20-%2021%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  22: "https://link.eu1.storjshare.io/judrr3lcsj4uy4fboasf2nipzlgq/voir-animes/jojo/Jojo%20S03%20-%2022%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  23: "https://link.eu1.storjshare.io/jvqzffrdlx4qlmswqldzdgti3nja/voir-animes/jojo/Jojo%20S03%20-%2023%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  24: "https://link.eu1.storjshare.io/jwhrmndmjym34jdynukemqxnhwya/voir-animes/jojo/Jojo%20S03%20-%2024%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  25: "https://link.eu1.storjshare.io/judgh6u4qo5hmgklt4ymixntybla/voir-animes/jojo/Jojo%20S03%20-%2025%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  26: "https://link.eu1.storjshare.io/jur6xzosrabynlzumwson2v6kk7q/voir-animes/jojo/Jojo%20S03%20-%2026%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  27: "https://link.eu1.storjshare.io/juqzcavdex42iqtlwlbrqy6ckszq/voir-animes/jojo/Jojo%20S03%20-%2027%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  28: "https://link.eu1.storjshare.io/jwj3cld6234k24bvqbpd445jduvq/voir-animes/jojo/Jojo%20S03%20-%2028%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  29: "https://link.eu1.storjshare.io/jwiuuy5ab7k7o25xdurwo5eygvuq/voir-animes/jojo/Jojo%20S03%20-%2029%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  30: "https://link.eu1.storjshare.io/jvbkidegjrb6ou6porvcxk4wsuva/voir-animes/jojo/Jojo%20S03%20-%2030%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  31: "https://link.eu1.storjshare.io/jxrtfkdptj4gxolc5nztxjufqndq/voir-animes/jojo/Jojo%20S03%20-%2031%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  32: "https://link.eu1.storjshare.io/jvsfphvta3zqhicy66okwtusv4ba/voir-animes/jojo/Jojo%20S03%20-%2032%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  33: "https://link.eu1.storjshare.io/jvm5hz6vsyncwnlv5mq37h4jnvqq/voir-animes/jojo/Jojo%20S03%20-%2033%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  34: "https://link.eu1.storjshare.io/jxev2mhbys2ayporctcoo4nu6xla/voir-animes/jojo/Jojo%20S03%20-%2034%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  35: "https://link.eu1.storjshare.io/jukvh5mk7j6dkuhnoqbvi6lqowlq/voir-animes/jojo/Jojo%20S03%20-%2035%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  36: "https://link.eu1.storjshare.io/jwbtbvog376p2nqym2mqaio2ft7q/voir-animes/jojo/Jojo%20S03%20-%2036%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  37: "https://link.eu1.storjshare.io/juqa3th5zh2gdlcycphxsmzjdyzq/voir-animes/jojo/Jojo%20S03%20-%2037%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  38: "https://link.eu1.storjshare.io/jupogolj46ybz3twcuro2hlji6ka/voir-animes/jojo/Jojo%20S03%20-%2038%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  39: "https://link.eu1.storjshare.io/jv6blhqmgkyblblg2gc76g6sd57a/voir-animes/jojo/Jojo%20S03%20-%2039%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
};

const episodesS4 = {
  1: "https://link.eu1.storjshare.io/jvbvbmwd3rb4ep3igfhzsw4qq3ra/voir-animes/jojo/Jojo%20S04%20-%2001%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  2: "https://link.eu1.storjshare.io/jvjdysnpv4kvoixanoo5ycaoo2da/voir-animes/jojo/Jojo%20S04%20-%2002%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  3: "https://link.eu1.storjshare.io/jx22ficyawz665mfb5wk6oexbetq/voir-animes/jojo/Jojo%20S04%20-%2003%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  4: "https://link.eu1.storjshare.io/jwefucvwnsbznqgsfbtycxpdpt5a/voir-animes/jojo/Jojo%20S04%20-%2004%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  5: "https://link.eu1.storjshare.io/jxangge3exnmg7kypy3bnys7hg7a/voir-animes/jojo/Jojo%20S04%20-%2005%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  6: "https://link.eu1.storjshare.io/jx2safsyk55tfpfi6ojvlbj43feq/voir-animes/jojo/Jojo%20S04%20-%2006%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  7: "https://link.eu1.storjshare.io/jubzxzjqdahziy32eq6f2r33xgua/voir-animes/jojo/Jojo%20S04%20-%2007%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  8: "https://link.eu1.storjshare.io/juhg4yrub2sjbgysbd3neo6qytyq/voir-animes/jojo/Jojo%20S04%20-%2008%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  9: "https://link.eu1.storjshare.io/jvogskjxcm52yzedxqkgfp334nfq/voir-animes/jojo/Jojo%20S04%20-%2009%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  10: "https://link.eu1.storjshare.io/jwgnhfxelrsytibm5lyp2ubwhg6q/voir-animes/jojo/Jojo%20S04%20-%2010%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  11: "https://link.eu1.storjshare.io/jwyaisqit3lapg6ngaj4cvx75gca/voir-animes/jojo/Jojo%20S04%20-%2011%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  12: "https://link.eu1.storjshare.io/jv5whc6ws5bb53dgdccis7ozaxya/voir-animes/jojo/Jojo%20S04%20-%2012%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  13: "https://link.eu1.storjshare.io/jwuvqayh64mm7fnyzhcoyrt7i5ua/voir-animes/jojo/Jojo%20S04%20-%2013%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  14: "https://link.eu1.storjshare.io/jx3lj43metc7snifvkzhwbregl4q/voir-animes/jojo/Jojo%20S04%20-%2014%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  15: "https://link.eu1.storjshare.io/jwg67j2bcydpifwfsz22jwnnvv4a/voir-animes/jojo/Jojo%20S04%20-%2015%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  16: "https://link.eu1.storjshare.io/jwdo6jnj3oc3noghcspayace362q/voir-animes/jojo/Jojo%20S04%20-%2016%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  17: "https://link.eu1.storjshare.io/jxud3iu3selr3vuh4bds2pbghbuq/voir-animes/jojo/Jojo%20S04%20-%2017%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  18: "https://link.eu1.storjshare.io/jweyhgzxx63vuakr37hpwovaofkq/voir-animes/jojo/Jojo%20S04%20-%2018%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  19: "https://link.eu1.storjshare.io/jxhnrzadqkk3j5ckidx2swrqtdra/voir-animes/jojo/Jojo%20S04%20-%2019%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  20: "https://link.eu1.storjshare.io/jvmgkjfht43upircor6sysvoq33a/voir-animes/jojo/Jojo%20S04%20-%2020%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  21: "https://link.eu1.storjshare.io/jxptwf4mmlisfsu5vq6ygtrvzzmq/voir-animes/jojo/Jojo%20S04%20-%2021%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  22: "https://link.eu1.storjshare.io/jxcvhoifvxm45xksbam57l5la6ja/voir-animes/jojo/Jojo%20S04%20-%2022%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  23: "https://link.eu1.storjshare.io/jvzyhzgzhyjvdshnz7elffunicyq/voir-animes/jojo/Jojo%20S04%20-%2023%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  24: "https://link.eu1.storjshare.io/jvwxlafofis4if5avj5vwphobzea/voir-animes/jojo/Jojo%20S04%20-%2024%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  25: "https://link.eu1.storjshare.io/jxcezeomiyf5mryc4px4pzeieo7q/voir-animes/jojo/Jojo%20S04%20-%2025%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  26: "https://link.eu1.storjshare.io/jv5qnhjufpkwfee7ossfb24nwhjq/voir-animes/jojo/Jojo%20S04%20-%2026%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  27: "https://link.eu1.storjshare.io/jwzq3jdxcqg7cgycgsrp7vrufn2q/voir-animes/jojo/Jojo%20S04%20-%2027%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  28: "https://link.eu1.storjshare.io/jvcyzz4thulsym7jsqf4xyaw3d2q/voir-animes/jojo/Jojo%20S04%20-%2028%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  29: "https://link.eu1.storjshare.io/jxe57zgioas3wh4zvsvvhrtuo4ia/voir-animes/jojo/Jojo%20S04%20-%2029%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  30: "https://link.eu1.storjshare.io/jwrtid4mcpyt7hcnskcnjxlg6qba/voir-animes/jojo/Jojo%20S04%20-%2030%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  31: "https://link.eu1.storjshare.io/jv4dz6cyrob4xkjfsdkkdr3ctitq/voir-animes/jojo/Jojo%20S04%20-%2031%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  32: "https://link.eu1.storjshare.io/juf2a46xplcmaswns5nffaehleoq/voir-animes/jojo/Jojo%20S04%20-%2032%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  33: "https://link.eu1.storjshare.io/jw5lqjonfhyjturuqf7dviguigya/voir-animes/jojo/Jojo%20S04%20-%2033%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  34: "https://link.eu1.storjshare.io/jw4f66c3hwvvxkuoszgomreeidwq/voir-animes/jojo/Jojo%20S04%20-%2034%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  35: "https://link.eu1.storjshare.io/jvhlfweer6rc3zn4jts5uqcicqnq/voir-animes/jojo/Jojo%20S04%20-%2035%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  36: "https://link.eu1.storjshare.io/julyde7pt3bcmxhp774kzr6hejvq/voir-animes/jojo/Jojo%20S04%20-%2036%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  37: "https://link.eu1.storjshare.io/ju77wneayst7laxliuchipnwzm4a/voir-animes/jojo/Jojo%20S04%20-%2037%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  38: "https://link.eu1.storjshare.io/juh6zb6zw6pdczp4kplwvrzcpuva/voir-animes/jojo/Jojo%20S04%20-%2038%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
  39: "https://link.eu1.storjshare.io/jwxrtuiruv4xdjfrivt7nbq77i6q/voir-animes/jojo/Jojo%20S04%20-%2039%20Vostfr%20%5B1080P%5D%5BX265%5D%5B10Bits%5D%5BSr-71%5D.mp4",
};

const episodesS5 = {
  1: "https://link.eu1.storjshare.io/jwtvr6frkfbkhs7j3joqjvj3nniq/voir-animes/jojo/Jojos.Bizarre.Adventure.S05e01.Multi.1080P.Nf.Web-Dl.Ddp2.0.X264-Notag.mp4",
  2: "https://link.eu1.storjshare.io/jxtxsrk5uxyquxxuztayfcvsyu5q/voir-animes/jojo/Jojos.Bizarre.Adventure.S05e02.Multi.1080P.Nf.Web-Dl.Ddp2.0.X264-Notag.mp4",
  3: "https://link.eu1.storjshare.io/jx26nu4knusakarpypxgl7fo5jha/voir-animes/jojo/Jojos.Bizarre.Adventure.S05e03.Multi.1080P.Nf.Web-Dl.Ddp2.0.X264-Notag.mp4",
  4: "https://link.eu1.storjshare.io/jw742ritq4bk47l4fr46pja3e4wa/voir-animes/jojo/Jojos.Bizarre.Adventure.S05e04.Multi.1080P.Nf.Web-Dl.Ddp2.0.X264-Notag.mp4",
  5: "https://link.eu1.storjshare.io/jv2xpmxwrw2qj2yceeydqviodgma/voir-animes/jojo/Jojos.Bizarre.Adventure.S05e05.Multi.1080P.Nf.Web-Dl.Ddp2.0.X264-Notag.mp4",
  6: "https://link.eu1.storjshare.io/jwkycrowsj4jyxdorkfvytiaps4q/voir-animes/jojo/Jojos.Bizarre.Adventure.S05e06.Multi.1080P.Nf.Web-Dl.Ddp2.0.X264-Notag.mp4",
  7: "https://link.eu1.storjshare.io/jwsukf6dh3blzmh3bs2oygfzc3fq/voir-animes/jojo/Jojos.Bizarre.Adventure.S05e07.Multi.1080P.Nf.Web-Dl.Ddp2.0.X264-Notag.mp4",
  8: "https://link.eu1.storjshare.io/jxt5yf4kj637e3txqbnnjpau7cfa/voir-animes/jojo/Jojos.Bizarre.Adventure.S05e08.Multi.1080P.Nf.Web-Dl.Ddp2.0.X264-Notag.mp4",
  9: "https://link.eu1.storjshare.io/jwx4gx4p3iniprcm2pr2m5w7nk4a/voir-animes/jojo/Jojos.Bizarre.Adventure.S05e09.Multi.1080P.Nf.Web-Dl.Ddp2.0.X264-Notag.mp4",
  10: "https://link.eu1.storjshare.io/jvmjk63od24jfszj6hjftvkzkoia/voir-animes/jojo/Jojos.Bizarre.Adventure.S05e10.Multi.1080P.Nf.Web-Dl.Ddp2.0.X264-Notag.mp4",
  11: "https://link.eu1.storjshare.io/jxlyf2soivirebaxe6wyojis7gfq/voir-animes/jojo/Jojos.Bizarre.Adventure.S05e11.Multi.1080P.Nf.Web-Dl.Ddp2.0.X264-Notag.mp4",
  12: "https://link.eu1.storjshare.io/judrrwpsp4polvkmh5qzch54fd7a/voir-animes/jojo/Jojos.Bizarre.Adventure.S05e12.Multi.1080P.Nf.Web-Dl.Ddp2.0.X264-Notag.mp4",
};

seasonLessSlash = season.slice(0, -1);

if (seasonLessSlash === "1-phantom-blood-and-battle-tendency") {
  $(".epnumber")[0].innerHTML = "Phantom Blood & Battle Tendency - Ep. " + pageNumber;
  document.title = "Phantom Blood & Battle Tendency - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS1[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].href = "javascript:void(0)";
  }

  if (pageNumber === "26") {
    $("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "../2-stardust-crusaders/";
  }
}

if (seasonLessSlash === "2-stardust-crusaders") {
  $(".epnumber")[0].innerHTML = "Stardust Crusaders - Ep. " + pageNumber;
  document.title = "Stardust Crusaders - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS2[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].innerHTML = "<button><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
    $("#previous-ep")[0].href = "../1-phantom-blood-and-battle-tendency/26.html";
  }

  if (pageNumber === "48") {
    $("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "../3-diamond-is-unbreakable/";
  }
}

if (seasonLessSlash === "3-diamond-is-unbreakable") {
  $(".epnumber")[0].innerHTML = "Diamond is Unbreakable - Ep. " + pageNumber;
  document.title = "Diamond is Unbreakable - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS3[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].innerHTML = "<button><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
    $("#previous-ep")[0].href = "../2-stardust-crusaders/48.html";
  }

  if (pageNumber === "39") {
    $("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "../4-golden-wind/";
  }
}

if (seasonLessSlash === "4-golden-wind") {
  $(".epnumber")[0].innerHTML = "Golden Wind - Ep. " + pageNumber;
  document.title = "Golden Wind - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS4[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].innerHTML = "<button><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
    $("#previous-ep")[0].href = "../3-diamond-is-unbreakable/39.html";
  }

  if (pageNumber === "39") {
    $("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "../5-stone-ocean/";
  }
}

if (seasonLessSlash === "5-stone-ocean") {
  $(".epnumber")[0].innerHTML = "Stone Ocean - Ep. " + pageNumber;
  document.title = "Stone Ocean - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS5[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].innerHTML = "<button><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
    $("#previous-ep")[0].href = "../4-golden-wind/39.html";
  }

  if (pageNumber === "12") {
    $("#next-ep")[0].innerHTML = "<button class='locked'>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "javascript:void(0)";
  }
}
