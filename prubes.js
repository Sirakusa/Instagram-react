const description =
  "https://ca-times.brightspotcdn.com/dims4/default/d0f3454/2147483647/strip/true/crop/2652x3778+0+0/resize/1200x1710!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F97%2F3e%2F1ad9dbc6d24e25b18615d0173907%2Fcfdj8ltnv9kny2lduwslvocjxsc-00wywdyhqu9gwd-f732n6s5h4akaqinexcxfwtbugqycgm4khyq8n76mbdyo4rnnsvczfdldkv582428vzaf9ahmmclfhl1hityvwq32fc61qpzby0xtibok9dkoofjgshjuw7stwrctekmeklats4lpjoyyug43z-fqj60r-gmn9sx5drrdgg3wab3klrme1lmfoyfq6ho9mxcirevitokafdv8rqs4tzbgzk-acxkdljo-w9zqjecf7tsiy85vlq7rkmidusjhnbooc-vpzj0eid6knxhaqppw1wz7lovoewi3j8wpvbtoexiu4kx-vy2axbemltx8e97u9ztr9ds-w8gxvpjp4ql4px4qfl2m7qaupuis5atfjzzv79g";

const chunkSize = 38;
const regex = new RegExp(`.{1,${chunkSize}}`, "g");
const array = description.match(regex) || [];

console.log(array);
