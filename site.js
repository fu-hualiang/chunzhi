(() => {
  "use strict";

  const items = [
    {
      id: "LT-084", name: "双轨录音盒", category: "音视频设备", place: "后门器材柜",
      date: "2024-11-06", icon: "recorder", photo: "assets/recorder.jpg",
      note: "黑色录音盒一台，机身有旧胶带标记。随柜登记，保留设备编号以供查询原始回放。",
      event: "C03", device: "R-017",
    },
    {
      id: "LT-081", name: "灰色保温水壶", category: "随身物品", place: "观众席 C 区",
      date: "2024-11-05", icon: "bottle", note: "杯底贴有一枚白色圆形标签，盖口有轻微磕痕。",
    },
    {
      id: "LT-076", name: "白色 Type-C 充电线", category: "随身物品", place: "一楼服务台",
      date: "2024-11-04", icon: "cable", note: "线长约一米，归档时以束线带捆好。",
    },
    {
      id: "LT-072", name: "深灰色训练外套", category: "衣物", place: "西侧休息区",
      date: "2024-11-03", icon: "coat", note: "深灰色拉链外套，内侧无姓名标记。左袖有一处浅色补线。",
    },
  ];

  const orders = [
    { id: "C01", name: "青训公开课", date: "2024-11-03", note: "公开课于 18:00 开放入场。投影和场内扩音复检完成，设备已归还。" },
    { id: "C02", name: "观众席设备巡检", date: "2024-11-05", note: "已更换 C 区两个座位的读卡器。散场后完成复检，次日安排正常。" },
    { id: "C03", name: "双人表演赛", date: "2024-11-06" },
  ];

  const exhibitOrder = orders[2];
  const recorder = items[0];
  const originalReceipt = { id: "LT-1106-02", time: "22:13", location: "后门器材柜", signer: "陈序" };
  const archiveFiles = [
    { id: "receipt", title: "原始签收单", detail: originalReceipt.id },
    { id: "conversation", title: "关门后的双人谈话", detail: "22:16:09–22:16:41" },
    { id: "arrival", title: "到场核对片段", detail: "22:11:08–22:11:22" },
    { id: "index", title: "第 03 条入库索引", detail: "本次恢复记录" },
  ];
  const oldCaption = "双人表演赛因陈序缺席而取消。";
  const correctedCaption = "陈序从后门到场，表演赛取消原因待核。";
  const finalCaption = "两位选手均已到场。双人表演赛经两人共同确认后取消。";
  const dispatchIndex = "R-018";
  const dispatchWords = "闻舟，明天九点。我照常叫你。你来不来，回我一声就行。耳机我带着。";
  const readbackSnapshot = "Q-71";
  const seatCaption = "次日，闻舟和陈序按约进入同一间线上训练房。";
  const seatEndings = {
    summary: "展签已补记两人赴约的事实。房间对话保存在原档案里。",
    sealed: "这次核对和房间对话一并留存在房间档案里。",
  };
  const followUpNotes = [
    { author: "闻舟", time: "2024-11-07 09:06", text: "耳机能听见了。你明天还这个点叫我。" },
    { author: "陈序", time: "2024-11-07 09:07", text: "好，明天我先开房。你到了就进。" },
  ];
  const appointmentRoom = "TR-34";
  const trainingTracks = [
    { id: "A", seat: "左位", speaker: "闻舟", tap: 4, voice: 6, file: "assets/training-left.wav", text: "听见了。你说完，我没挂。" },
    { id: "B", seat: "右位", speaker: "陈序", tap: 7, voice: 8, file: "assets/training-right.wav", text: "你听见没？我在。" },
  ];
  const trainingOffset = trainingTracks[0].tap - trainingTracks[1].tap;
  const keptExcerpt = { start: 50, end: 95 };
  const keptDuration = (keptExcerpt.end - keptExcerpt.start) / 10;
  const keptArchive = { id: "TR34-K-1108", date: "2024-11-08", file: "assets/training-kept.wav" };
  const excerptMarks = [
    { time: 40, label: "对拍敲击" },
    { time: keptExcerpt.start, label: "陈序开口" },
    { time: 60, label: "闻舟接话" },
    { time: 71, label: "陈序收声" },
    { time: keptExcerpt.end, label: "闻舟收声" },
    { time: 105, label: "录音尾段" },
  ];
  const screeningSlot = {
    date: "2026-11-06", time: "14:00", terminal: "厅屏 02",
    title: "晨练房片段", caption: `十一月八日 · ${appointmentRoom} 晨练房档案`,
  };
  const screeningReceipts = [
    {
      id: "ZD-208", time: "13:40", terminal: screeningSlot.terminal,
      image: "试机测试卡", imageSeconds: 2, sound: "展厅扬声器 · 测试音", soundSeconds: 2,
      note: "现场试音通过，扬声器连接正常。",
    },
    {
      id: "ZD-211", time: screeningSlot.time, terminal: "复核台 02",
      image: "签收回执", imageSeconds: keptDuration, sound: "复核台耳机 · 留存原声", soundSeconds: keptDuration,
      note: "留存副本在值班室核验，收听设备登记为本地耳机。",
    },
    {
      id: "ZD-217", time: screeningSlot.time, terminal: screeningSlot.terminal,
      image: "展签画面", imageSeconds: keptDuration, sound: "展厅扬声器 · 音轨未下发", soundSeconds: 0,
      note: "扬声器连接正常。展厅播放器记播放 1 次。",
    },
  ];
  const handoffSlip = { id: "YJ-1106-04", time: "14:18", label: originalReceipt.location, seal: "FT-28", sender: "陈序" };
  const movedCabinet = "G-17";
  const handoffCabinets = {
    "G-04": {
      label: handoffSlip.label, description: "门内固定柜", move: "原地封存", current: "旧馆后门内",
      receipts: [],
    },
    "G-12": {
      label: "服务台暂存柜", description: "一楼接待台", move: "随展务桌移出", current: "纪念展接待处",
      receipts: [{ id: "transfer", time: handoffSlip.time, seal: handoffSlip.seal, action: "转出" }],
    },
    [movedCabinet]: {
      label: handoffSlip.label, description: "靠墙活动柜", move: "随撤场器材移出", current: "纪念展展务室",
      receipts: [
        { id: "loan", time: "13:40", seal: handoffSlip.seal, action: "借出" },
        { id: "poster", time: handoffSlip.time, seal: "FT-82", action: "归还" },
        { id: "return", time: handoffSlip.time, seal: handoffSlip.seal, action: "归还" },
      ],
    },
  };
  const renewalPlan = {
    date: "2026-11-07", duration: 10,
    host: { name: "闻舟", start: 9 * 60 + 5, end: 9 * 60 + 30 },
    guest: { name: "陈序", start: 9 * 60, end: 9 * 60 + 25 },
    inspection: { start: 9 * 60 + 10, end: 9 * 60 + 15 },
  };
  const renewalStep = 5;
  const renewalBlocks = Array.from({ length: 7 }, (_, index) => 8 * 60 + 55 + index * renewalStep);
  const closingTargets = {
    exhibit: "纪念展公开展签",
    pair: "两位签收人的封套",
    diagnostics: "馆务修复日志",
  };
  const closingRecords = [
    {
      id: "caption", title: "C03 到场与撤演勘误", detail: "原始签收单与到场核对片段。",
      target: "exhibit", hint: "对照 C03 的展签附件登记。这两件材料已经获得随展签公开的许可。",
    },
    {
      id: "audio", title: "TR-34 共同留存原声", detail: "两句原声及两位队员的留存回执。",
      target: "pair", hint: "请按放映变更联签单的范围处理这段原声。两人各自签收了留存副本。",
    },
    {
      id: "index", title: "首分钟索引修复记录", detail: "录音器状态、首段写入量和错链的资源编号。",
      target: "diagnostics", hint: "这份记录用于修复预览关联，查阅范围见结案单上的恢复批注。",
    },
  ];
  const appointmentDays = {
    "2024-11-07": {
      label: "11 月 7 日",
      rooms: [
        { id: "TR-27", time: "09:00", host: "闻舟", observers: false, hint: "这是两人已经赴过的那次约。便签是在这之后写下的。" },
        { id: "TR-28", time: "09:00", host: "陈序", observers: false, hint: "开房人对得上。按 11 月 7 日便签里的「明天」再找一天。" },
      ],
    },
    "2024-11-08": {
      label: "11 月 8 日",
      rooms: [
        { id: "TR-31", time: "08:55", host: "陈序", observers: false, hint: "这间开得早了。查一查上一份预约的开始时间。" },
        { id: "TR-32", time: "09:00", host: "闻舟", observers: false, hint: "开始时间对得上。便签里说了这次由谁先开房。" },
        { id: "TR-33", time: "09:00", host: "陈序", observers: true, hint: "日期、开始时间和开房人都对得上。再核对旁听设置。" },
        { id: appointmentRoom, time: "09:00", host: "陈序", observers: false },
      ],
    },
  };
  const seatSnapshots = {
    booking: {
      label: "座位预约簿", id: "TR-27-A", time: "2024-11-07 08:52", total: "预留 2 席 · 连入 0 人",
      seats: [["左位", "闻舟", "已预留"], ["右位", "陈序", "已预留"]],
      note: "发出邀请后，房间先保留两个位置。接入记录会另行登记。",
    },
    connected: {
      label: "房间连接日志", id: "TR-27-B", time: "2024-11-07 09:02", total: "连入 2 人 · 旁听 0 人",
      seats: [["左位", "闻舟", "09:00 已连入"], ["右位", "陈序", "09:02 已连入"]],
      note: "线上训练房在两位队员连入后写下这条记录。",
    },
    restored: {
      label: "恢复会话登记", id: "TR-27-C", time: "本次恢复回帖后", total: "保留 2 个旧席位 · 登记 1 个旁听席",
      seats: [["左位", "闻舟", "保留旧快照"], ["右位", "陈序", "保留旧快照"], ["旁听席", "校对人", "本次恢复时登记"]],
      note: "档案系统打开恢复出的回帖时，给校对人分配了一个只读位置。",
    },
  };
  const boardTopics = [
    {
      id: "excerpt", title: "转存一段活动记录里的对话", author: "训练板值班", time: "2024-11-07 09:20",
      text: "训练帖怕过几天不好找，先手抄一句，原回复还在训练区。",
      quote: "我照常叫你。你来不来，回我一声就行。", source: dispatchIndex, snapshot: "Q-17",
    },
    {
      id: "room", title: "周四晨练换房", author: "陈序", time: "2024-11-07 08:52",
      text: "昨晚那条没发出去，我把原话再贴一次。今天改用线上房，房号在底下回。",
      quote: dispatchWords, source: dispatchIndex, snapshot: readbackSnapshot,
    },
    {
      id: "equipment", title: "周四耳机和线材收纳", author: "训练板值班", time: "2024-11-07 08:49",
      text: "写了「耳机我带着」的设备留在各自包里。柜里只回收备用线。",
      quote: "备用线留在柜里，等下一班收。", source: "C02", snapshot: "Q-32",
    },
  ];
  const dispatchEntries = {
    withdrawal: {
      title: "撤演确认入库", clock: "场馆服务器", time: "2024-11-06 23:58",
      note: "C03 联签单移入活动档案。申请时间为当晚 22:16。",
    },
    message: {
      title: "离线留言保存", clock: "02 号机本地", time: "2024-11-07 00:03",
      note: "暂存一段未发出的语音，索引为 R-018。",
    },
    shutdown: {
      title: "断电移交", clock: "场馆服务器", time: "2024-11-07 00:00",
      note: "02 号机关闭。终端及离线数据随器材一并移交。",
    },
  };
  const dispatchChronology = Object.keys(dispatchEntries);
  const initialDispatchOrder = ["message", "shutdown", "withdrawal"];
  const storageKey = "linting-archive-v1";
  const lines = {
    excerpt: [
      ["22:11:08", "闻舟", "你别来了。"],
    ],
    backup: [
      ["22:11:08", "闻舟", "你别来了。正门堵着人，绕后门。我在这儿。"],
      ["22:11:13", "陈序", "你还等着呢？"],
      ["22:11:15", "闻舟", "你那边的耳机又只响一只。新的给你试好了。"],
    ],
  };
  const tracks = {
    excerpt: { title: "公开节选", file: "assets/excerpt.wav", detail: "公开回放 · 仅截取场内调度片段" },
    backup: { title: "机内备份", file: "assets/backup.wav", detail: "录音盒本地备份 · 交接前对讲" },
  };

  const main = document.querySelector("main");
  let progress = readProgress();
  let view;
  let screeningTimer;

  function freshProgress() {
    return {
      reviewed: false, correctedAt: null, archiveStage: null,
      dispatchOrder: [...initialDispatchOrder], dispatchStage: null, readbackVerified: false, seatStage: null,
      appointmentMatched: false, trainingAligned: false, excerptSaved: false, screeningRebuilt: false, handoffVerified: false,
      renewalStart: null, openingVerified: false, caseClosed: false,
    };
  }

  function readProgress() {
    const initial = freshProgress();
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey));
      const correctedAt = typeof saved?.correctedAt === "number" && Number.isFinite(saved.correctedAt)
        ? saved.correctedAt : null;
      const archiveStage = correctedAt && ["located", "filed"].includes(saved?.archiveStage)
        ? saved.archiveStage : null;
      const dispatchStage = archiveStage === "filed" && ["restored", "filed"].includes(saved?.dispatchStage)
        ? saved.dispatchStage : null;
      const validOrder = archiveStage === "filed" && Array.isArray(saved?.dispatchOrder) &&
        saved.dispatchOrder.length === dispatchChronology.length &&
        dispatchChronology.every((entry) => saved.dispatchOrder.includes(entry));
      const readbackVerified = dispatchStage === "filed" && saved?.readbackVerified === true;
      const seatStage = readbackVerified && (saved?.seatStage === "verified" || Object.hasOwn(seatEndings, saved?.seatStage))
        ? saved.seatStage : null;
      const appointmentMatched = Object.hasOwn(seatEndings, seatStage) && saved?.appointmentMatched === true;
      const trainingAligned = appointmentMatched && saved?.trainingAligned === true;
      const excerptSaved = trainingAligned && saved?.excerptSaved === true;
      const screeningRebuilt = excerptSaved && saved?.screeningRebuilt === true;
      const handoffVerified = screeningRebuilt && saved?.handoffVerified === true;
      const renewalStart = handoffVerified && !renewalConflict(saved?.renewalStart) ? saved.renewalStart : null;
      const openingVerified = renewalStart !== null && saved?.openingVerified === true;
      return {
        reviewed: saved?.reviewed === true || correctedAt !== null, correctedAt, archiveStage, dispatchStage,
        dispatchOrder: dispatchStage ? [...dispatchChronology] : validOrder ? saved.dispatchOrder : initial.dispatchOrder,
        readbackVerified, seatStage,
        appointmentMatched, trainingAligned, excerptSaved, screeningRebuilt,
        handoffVerified, renewalStart, openingVerified, caseClosed: openingVerified && saved?.caseClosed === true,
      };
    } catch {
      return initial;
    }
  }

  function saveProgress() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(progress));
    } catch {
      // 受限浏览器仍可在当前页面会话中继续校对。
    }
  }

  function escaped(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    })[character]);
  }

  function comparable(value) {
    return value.normalize("NFKC").toUpperCase().replace(/[\s\-–—]+/g, "");
  }

  function route(page, values = {}) {
    const params = new URLSearchParams(Object.entries(values).filter(([, value]) => value));
    return `#${page}${params.size ? "?" + params : ""}`;
  }

  function go(page, values) {
    const target = route(page, values);
    if (location.hash === target) render();
    else location.hash = target;
  }

  function currentView() {
    const hash = location.hash.slice(1);
    const separator = hash.indexOf("?");
    const page = separator === -1 ? hash : hash.slice(0, separator);
    return {
      page: Object.hasOwn(pages, page) ? page : "claim",
      params: new URLSearchParams(separator === -1 ? "" : hash.slice(separator + 1)),
    };
  }

  function icon(name) {
    const paths = {
      search: '<circle cx="10.5" cy="10.5" r="5.5"/><path d="m15 15 4 4"/>',
      bottle: '<path d="M9 4h6v4l2 3v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-8l2-3zM9 8h6M7 13h10"/>',
      cable: '<path d="M6 4v3a4 4 0 0 0 8 0V6m0 0h4m-4 0V3h4v3m-8 5v4a4 4 0 0 0 8 0v-1m-2 0h4v-3h-4z"/>',
      coat: '<path d="m9 4-4 2-3 7 4 2 2-4v9h8v-9l2 4 4-2-3-7-4-2m-6 0 3 4 3-4m-3 4v12"/>',
    };
    return `<svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round">${paths[name] || ""}</svg>`;
  }

  function intro({ title, summary, mark, parent, metaLabel, metaValue }) {
    return `<nav class="crumbs" aria-label="当前位置">
      <a href="#claim">馆务首页</a><span aria-hidden="true">/</span>
      ${parent ? `<a href="#claim">${parent}</a><span aria-hidden="true">/</span>` : ""}
      <span aria-current="page">${title}</span>
    </nav>
    <header class="intro">
      <div><div class="eyebrow">${mark}</div><h1>${title}</h1><p>${summary}</p></div>
      <dl class="intro-meta"><dt>${metaLabel}</dt><dd>${metaValue}</dd></dl>
    </header>`;
  }

  function search({ page, name, label, value, placeholder, filters = "" }) {
    const inputId = `${page}-query`;
    return `<div class="search-panel">
      <label for="${inputId}">${label}</label>
      <form class="search-form" data-search="${page}" role="search" aria-label="${label}">
        <div class="input-wrap">${icon("search")}
          <input type="search" id="${inputId}" name="${name}" value="${escaped(value)}"
            placeholder="${placeholder}" autocomplete="off" maxlength="70" ${page === "claim" || page === "board" ? "" : "required"}>
        </div>
        <button class="button" type="submit">查询</button>
      </form>
      ${filters}
    </div>`;
  }

  function itemImage(item) {
    return item.photo
      ? `<img src="${item.photo}" alt="${item.name}登记照，机身标签为 ${item.event} / ${item.device}">`
      : `<div class="item-icon">${icon(item.icon)}</div>`;
  }

  function notice() {
    const finished = progress.dispatchStage === "filed";
    return `<aside class="stack" aria-label="馆务公告">
      <section class="side-card pinned">
        <div class="side-kicker"><span class="status status-warn">置顶公告</span><span class="mono">LT-2026-01</span></div>
        <h2>纪念展展签勘误</h2>
        <p>${finished ? "展务组已核对闭馆前最后一场活动的档案，展签定稿已登记。"
          : "两位曾同队夺冠的选手原定在闭馆前同台。展务组正核对当晚留下的记录。"}</p>
        <blockquote class="quote"><small>原展签稿 · 11 月 6 日</small>${oldCaption}</blockquote>
        <p>${finished ? "旧稿继续留档。工单中可查阅勘误和定稿所依据的记录。"
          : "有观众来信说，当晚的器材交接单上还有一位签收人。请从 11 月 6 日登记的音视频设备查起。"}</p>
        ${progress.correctedAt ? `<div class="side-links">
          <a class="inline-link" href="${route("orders", { event: exhibitOrder.id, section: "correction" })}">查看已登记的勘误 →</a>
          <a class="inline-link" href="#archive">${progress.archiveStage === "filed" ? "查看档案复核结论" : "追查第 03 条签收"} →</a>
          ${progress.archiveStage === "filed" ? `<a class="inline-link" href="${route("replay", { device: dispatchIndex })}">${progress.dispatchStage === "filed" ? "查看留言归档" : "追查待投递留言"} →</a>` : ""}
          ${finished ? `<a class="inline-link" href="#readback">${progress.readbackVerified ? "查看已读回执结论" : "追查已读回执"} →</a>` : ""}
          ${progress.readbackVerified ? `<a class="inline-link" href="#seating">${seatingLinkLabel()} →</a>` : ""}
        </div>` : ""}
      </section>
      <section class="side-card query-guide">
        <h3>查询须知</h3>
        <ul>
          <li>失物页保留原登记照片与物品标签。</li>
          <li>场次编号可用于核对赛务工单。</li>
          <li>备份录音按设备编号归档。</li>
          <li>后门已于 2024 年 11 月 7 日随场馆封闭。</li>
        </ul>
      </section>
    </aside>`;
  }

  function claimPage(params) {
    const query = params.get("q") || "";
    const requestedCategory = params.get("category") || "";
    const categories = ["", ...new Set(items.map((item) => item.category))];
    const category = categories.includes(requestedCategory) ? requestedCategory : "";
    const filtered = items.filter((item) =>
      (!category || item.category === category) &&
      [item.name, item.id, item.place].some((part) => comparable(part).includes(comparable(query)))
    );
    const filters = `<div class="filters" aria-label="按物品类别筛选">
      ${categories.map((entry) => `<a href="${route("claim", { q: query, category: entry })}"
        aria-current="${entry === category}">${entry || "全部"}</a>`).join("")}
    </div>`;
    return intro({
      title: "失物认领", summary: "查询闭馆前登记的遗留物品及其关联交接记录。",
      mark: "01 / LOST PROPERTY", metaLabel: "归档区间", metaValue: "2024.11.03 – 11.06",
    }) + `<div class="layout claim-layout">
      <section class="panel" aria-labelledby="registered">
        <div class="panel-head"><h2 id="registered">认领登记</h2><span class="small">共 ${filtered.length} 项</span></div>
        ${search({ page: "claim", name: "q", label: "搜索登记物品", value: query, placeholder: "输入物品名称、登记地点或编号", filters })}
        <div class="list-label"><span>物品 / 登记地点</span><span>登记日期</span></div>
        ${filtered.length ? filtered.map((item) => `<a class="item-row" href="${route("item", { ref: item.id })}">
          <div class="thumb">${itemImage(item)}</div>
          <div><span class="item-name">${item.name}</span><span class="item-sub">${item.category} · ${item.place}</span></div>
          <div class="item-date"><span>${item.date}</span><span class="status">已归档</span></div>
          <span class="row-arrow" aria-hidden="true">›</span>
        </a>`).join("") : `<div class="empty">
          <p>未找到符合条件的登记。</p><a href="#claim" class="inline-link">清除筛选</a>
        </div>`}
      </section>
      ${notice()}
    </div>`;
  }

  function itemPage(params) {
    const item = items.find((entry) => comparable(entry.id) === comparable(params.get("ref") || ""));
    if (!item) return intro({
      title: "登记详情", summary: "找不到这条登记记录。", mark: "01 / LOST PROPERTY",
      parent: "失物认领", metaLabel: "档案状态", metaValue: "—",
    }) + '<p><a href="#claim">返回认领登记</a></p>';

    return intro({
      title: item.name, summary: `${item.category} · ${item.place} · 已归档`,
      mark: "01 / PROPERTY RECORD", parent: "失物认领", metaLabel: "登记编号", metaValue: item.id,
    }) + `<div class="layout">
      <section class="panel" aria-labelledby="property-photo">
        <div class="panel-head"><h2 id="property-photo">${item.photo ? "物品照片" : "物品登记"}</h2><span class="mono small">${item.id}</span></div>
        <div class="panel-body">
          <figure class="figure-photo">${itemImage(item)}
            <figcaption>${item.photo ? `机身标签　<code>${item.event} / ${item.device}</code>` : item.note}</figcaption>
          </figure>
        </div>
      </section>
      <aside class="side-card detail-aside">
        <h2>登记信息</h2>
        <dl class="facts">
          <dt>登记日期</dt><dd class="mono">${item.date}</dd>
          <dt>登记地点</dt><dd>${item.place}</dd>
          <dt>归档备注</dt><dd>${item.note}</dd>
          ${item.event ? `<dt>关联场次</dt><dd class="mono">${item.event}</dd><dt>设备编号</dt><dd class="mono">${item.device}</dd>` : ""}
        </dl>
        ${item.event ? `<a class="button detail-action" href="${route("orders", { event: item.event })}">查看关联工单 <span aria-hidden="true">→</span></a>` : ""}
        <p><a href="#claim" class="inline-link">返回认领登记</a></p>
      </aside>
    </div>`;
  }

  function newReceiptTime() {
    if (Date.now() - progress.correctedAt < 300000) return "刚刚";
    return new Intl.DateTimeFormat("zh-CN", {
      timeZone: "Asia/Shanghai", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23",
    }).format(progress.correctedAt);
  }

  function exhibitRecord() {
    return `<section class="panel" aria-labelledby="exhibit-record">
      <div class="section-head"><h2 id="exhibit-record">${exhibitOrder.id} · ${exhibitOrder.name}</h2><span class="small">${exhibitOrder.date}</span></div>
      <div class="panel-body">
        <div><span class="status status-warn">演示取消</span> <span class="status status-neutral">已归档</span></div>
        <blockquote class="quote"><small>旧展签稿</small>${oldCaption}</blockquote>
        <section class="document-block" aria-labelledby="entry-log">
          <h3 id="entry-log">正门签到表</h3>
          <div class="table-wrap">
            <table>
              <caption>表演赛入场核对 · 入口 A</caption>
              <thead><tr><th scope="col">选手</th><th scope="col">签到时间</th><th scope="col">记录</th></tr></thead>
              <tbody>
                <tr><td>闻舟</td><td class="mono">21:52</td><td>已登记</td></tr>
                <tr><td>陈序</td><td class="mono">—</td><td>未到</td></tr>
              </tbody>
            </table>
          </div>
          <p class="record-note">附记　22:11 的公开回放中，闻舟说「${lines.excerpt[0][2]}」</p>
        </section>
        <section class="document-block" aria-labelledby="handover">
          <h3 id="handover" tabindex="-1">器材交接记录</h3>
          <div class="table-wrap">
            <table>
              <caption>后门器材柜 · 双轨录音盒 <code>${recorder.device}</code></caption>
              <thead><tr><th scope="col">序号</th><th scope="col">时间</th><th scope="col">签收人</th><th scope="col">记录</th></tr></thead>
              <tbody>
                <tr><td class="mono">01</td><td class="mono">21:58</td><td>闻舟</td><td>领用签收</td></tr>
                <tr><td class="mono">02</td><td class="mono">${originalReceipt.time}</td><td>${originalReceipt.signer}</td><td>后门柜当面签收</td></tr>
                ${progress.correctedAt ? `<tr class="anomaly"><td class="mono">03</td><td>${newReceiptTime()}</td><td>陈序</td><td><a href="#archive">${progress.archiveStage === "filed" ? "已核为档案补录" : "后门柜当面签收"}</a></td></tr>` : ""}
              </tbody>
            </table>
          </div>
          ${progress.correctedAt ? `<p class="record-note">第 02 条原始回执　<code>${originalReceipt.id}</code></p>` : ""}
          <p class="record-note">机内录音未随公开回放导出。可凭设备编号在回放查询中调阅。</p>
          <p><a href="#replay" class="inline-link">打开回放查询 →</a></p>
        </section>
      </div>
    </section>`;
  }

  function correction() {
    const audited = progress.archiveStage === "filed";
    const choices = [
      ["absent", oldCaption],
      ["side-door", correctedCaption],
      ["played", "两位选手都已到场，表演赛如期举行。"],
    ];
    return `<section class="panel" id="correction" tabindex="-1" aria-labelledby="correction-heading">
      <div class="section-head"><h2 id="correction-heading">展签勘误</h2>
        <span class="status ${progress.correctedAt ? "" : "status-warn"}">${progress.correctedAt ? "已登记" : "待核对"}</span>
      </div>
      <div class="panel-body">
        ${progress.correctedAt ? `<p class="conclusion">${progress.dispatchStage === "filed" ? finalCaption : correctedCaption}</p>
          ${progress.dispatchStage === "filed" ? '<p class="record-note">取消原因已按 C03 的撤演联签单补齐。<a href="#dispatch">查阅联签记录 →</a></p>' : ""}
          ${progress.seatStage === "summary" ? `<p class="record-note"><strong>展签附记</strong>　${seatCaption}</p>` : ""}` : `
          <form id="correction-form">
            <fieldset class="editor">
              <legend>根据签到表、签收单和原始回放选择展签文字。</legend>
              ${choices.map(([value, label]) => `<label class="choice">
                <input type="radio" name="caption" value="${value}" required><span>${label}</span>
              </label>`).join("")}
            </fieldset>
            <button class="button detail-action" type="submit">提交勘误</button>
            <p class="feedback" id="correction-feedback" role="status"></p>
            <p class="correction-note">回放核阅　${progress.reviewed ? "已查看机内备份" : '<a href="#replay">待查看机内备份</a>'}</p>
          </form>`}
      </div>
    </section>
    ${progress.correctedAt ? `<section class="panel chapter-end" id="chapter-end" tabindex="-1" aria-labelledby="end-heading">
      <div class="section-head"><h2 id="end-heading">${audited ? "第 03 条签收已复核" : "收到一条新签收记录"}</h2><span class="mono small">03 / ${newReceiptTime()}</span></div>
      <div class="panel-body">
        ${audited ? "<p>这条记录是原始回执的补录，原签收时间保存在复核详情中。</p>"
          : "<p>签收人是陈序，地点还是后门器材柜。</p><p>馆务首页的查询须知还在。后门已经封了两年。</p>"}
        <p class="small muted">序章完 · 展签勘误已保留</p>
        <div class="actions">
          <a class="button button-secondary" href="#archive">${progress.archiveStage === "filed" ? "查看档案复核" : "追查这条签收"} →</a>
          <a class="inline-link" href="#claim">返回馆务首页</a>
        </div>
      </div>
    </section>` : ""}`;
  }

  function ordersPage(params) {
    const query = params.get("event") || "";
    const order = orders.find((entry) => entry.id === comparable(query));
    return intro({
      title: "历史工单", summary: "查阅临汀杯的场次安排、签到和器材交接记录。",
      mark: "02 / EVENT RECORDS", metaLabel: "资料类别", metaValue: "EVENT / 2024",
    }) + `<div class="layout">
      <div class="stack">
        <section class="panel" aria-labelledby="order-search">
          <div class="panel-head"><h2 id="order-search">场次查询</h2><span class="small">按场次编号</span></div>
          ${search({ page: "orders", name: "event", label: "场次编号", value: order?.id || query, placeholder: "例如 C01" })}
          ${query && !order ? '<p class="empty" role="status">没有对应的工单。请核对物品标签上的场次编号。</p>' : ""}
          ${!query ? `<div class="panel-body">
            <h3>近期归档</h3>
            <div class="recent">${orders.slice(0, 2).map((entry) => `<a href="${route("orders", { event: entry.id })}">
              <span class="mono">${entry.id}</span>　${entry.name}
            </a>`).join("")}</div>
          </div>` : ""}
        </section>
        ${order === exhibitOrder ? exhibitRecord() + correction() : ""}
        ${order && order !== exhibitOrder ? `<section class="panel">
          <div class="section-head"><h2>${order.id} · ${order.name}</h2><span class="small">${order.date}</span></div>
          <div class="panel-body"><p>${order.note}</p><span class="status">已归档</span></div>
        </section>` : ""}
      </div>
      <aside class="side-card">
        <h3>关于场次编号</h3>
        <p>编号一般出现在物品标签、场记单或活动公告上。带空格或横线的编号也可查询。</p>
        <p>旧工单保留当时的填写范围。请留意表头标明的入口和设备位置。</p>
        <p><a href="#claim" class="inline-link">查找关联物品 →</a></p>
      </aside>
    </div>`;
  }

  function waveform(track) {
    const count = track === "backup" ? 69 : 32;
    const height = track === "backup" ? 33 : 24;
    const bars = Array.from({ length: count }, (_, index) => {
      const x = 4 + index * (412 / count);
      const size = 5 + (Math.sin(index * 2.54) ** 2) * (height * Math.sin((index + 1) / (count + 1) * Math.PI));
      return `<rect x="${x.toFixed(1)}" y="${((40 - size) / 2).toFixed(1)}" width="2" height="${size.toFixed(1)}" rx="1"/>`;
    });
    return `<svg class="waveform" aria-hidden="true" viewBox="0 0 420 40" preserveAspectRatio="none" fill="currentColor">${bars.join("")}</svg>`;
  }

  function trackContent(track) {
    const source = tracks[track];
    return `<div class="track">
      <div class="track-head"><h3>${source.title}</h3><span class="mono small muted">22:11</span></div>
      <p class="small muted">${source.detail}</p>
      ${waveform(track)}
      <audio src="${source.file}" controls preload="metadata" aria-label="${source.title}音频"></audio>
    </div>
    <details class="transcript" ${track === "backup" ? "open" : ""}>
      <summary>文字稿</summary>
      <ol>${lines[track].map(([time, speaker, line]) => `<li>
        <time>${time}</time><strong>${speaker}</strong>　${line}
      </li>`).join("")}</ol>
    </details>
    ${track === "backup" ? `<p class="record-note">已核阅机内备份。可返回场次工单登记展签勘误。</p>
      <a class="button button-secondary" href="${route("orders", { event: exhibitOrder.id, section: "correction" })}">返回工单登记勘误 →</a>` : ""}`;
  }

  function replayPage(params) {
    const query = params.get("device") || "";
    const found = comparable(query) === comparable(recorder.device);
    const aliasFound = progress.archiveStage === "filed" && comparable(query) === comparable(dispatchIndex);
    const device = found ? recorder.device : aliasFound ? dispatchIndex : query;
    return intro({
      title: "回放查询", summary: "按设备编号查找场记录音。可使用播放器或阅读文字稿。",
      mark: "03 / PLAYBACK SEARCH", metaLabel: "归档来源", metaValue: "ON-DEVICE COPY",
    }) + `<div class="layout">
      <div class="stack">
        <section class="panel" aria-labelledby="replay-search">
          <div class="panel-head"><h2 id="replay-search">设备查询</h2><span class="small">本地录音备份</span></div>
          ${search({ page: "replay", name: "device", label: "设备编号", value: device, placeholder: "例如 R-001" })}
          ${!found && !aliasFound ? `<p class="empty" role="status">${query ? "未找到这个编号的回放，请核对标签上的设备编号。" : "请输入设备编号以检索归档附件。"}</p>` : ""}
        </section>
        ${found ? `<section class="panel" aria-labelledby="replay-result">
          <div class="section-head"><h2 id="replay-result">${recorder.device} · 回放附件</h2><span class="mono small">${exhibitOrder.date}</span></div>
          <div class="panel-body">
            <div class="mode-picker" role="group" aria-label="录音版本">
              <button type="button" data-track="excerpt" aria-controls="track-content" aria-pressed="true">公开节选</button>
              <button type="button" data-track="backup" aria-controls="track-content" aria-pressed="false">机内备份</button>
            </div>
            <div id="track-content" class="stack" aria-live="polite">${trackContent("excerpt")}</div>
          </div>
        </section>` : ""}
        ${aliasFound ? `<section class="panel" aria-labelledby="alias-heading">
          <div class="section-head"><h2 id="alias-heading">${dispatchIndex} · 旧站迁移索引</h2><span class="status status-neutral">台账无设备</span></div>
          <div class="panel-body">
            <p>器材台账没有这个编号。旧站迁移时，02 号机的离线留言索引被写入了设备编号栏。</p>
            <dl class="facts">
              <dt>原始记录</dt><dd>02 号机 · 离线投递队列</dd>
              <dt>处理状态</dt><dd>${progress.dispatchStage === "filed" ? "已按原收件人归档" : "需按场馆时间还原顺序"}</dd>
            </dl>
            <a class="button button-secondary" href="#dispatch">打开机位投递记录 →</a>
          </div>
        </section>` : ""}
      </div>
      <aside class="side-card">
        <h3>关于回放版本</h3>
        <p>公开节选为当晚随赛务工单发布的片段。机内备份以设备本身的记录时间为准。</p>
        <p>设备编号见登记照片或器材交接单。</p>
        ${progress.archiveStage === "filed" && !aliasFound ? `<p><a href="${route("replay", { device: dispatchIndex })}" class="inline-link">查询待投递留言的关联编号 →</a></p>` : ""}
        ${progress.dispatchStage === "filed" ? `<p><a href="#readback" class="inline-link">${progress.readbackVerified ? "查看已读回执结论" : "追查已读回执"} →</a></p>` : ""}
        ${progress.readbackVerified ? `<p><a href="#seating" class="inline-link">${seatingLinkLabel()} →</a></p>` : ""}
        ${seatingClosed() ? `<p><a href="#appointments" class="inline-link">${appointmentLinkLabel()} →</a></p>` : ""}
        ${progress.appointmentMatched ? `<p><a href="#training" class="inline-link">${trainingLinkLabel()} →</a></p>` : ""}
        ${progress.trainingAligned ? `<p><a href="#retention" class="inline-link">${retentionLinkLabel()} →</a></p>` : ""}
        ${progress.excerptSaved ? `<p><a href="#screening" class="inline-link">${screeningLinkLabel()} →</a></p>` : ""}
        ${progress.screeningRebuilt ? `<p>${handoffLink("inline-link")}</p>` : ""}
        ${progress.handoffVerified ? `<p>${renewalLink("inline-link")}</p>` : ""}
        ${progress.renewalStart !== null ? `<p>${openingLink("inline-link")}</p>` : ""}
        ${progress.openingVerified ? `<p>${closingLink("inline-link")}</p>` : ""}
        <p><a href="#orders" class="inline-link">返回历史工单 →</a></p>
      </aside>
    </div>`;
  }

  function matchesArchive(receipt, device) {
    return comparable(receipt) === comparable(originalReceipt.id) && comparable(device) === comparable(recorder.device);
  }

  function archiveResult() {
    return `<section class="panel" id="archive-result" tabindex="-1" aria-labelledby="seal-heading">
      <div class="section-head"><h2 id="seal-heading">封存申请</h2><span class="mono small">FS-043</span></div>
      <div class="panel-body">
        <dl class="facts">
          <dt>申请人</dt><dd><strong>陈序</strong></dd>
          <dt>申请时间</dt><dd class="mono">2024-11-06 22:28</dd>
          <dt>关联回执</dt><dd><code>${originalReceipt.id}</code> · <code>${recorder.device}</code></dd>
          <dt>申请事项</dt><dd>撤下完整录音的公开附件。展签可附原始签收单和 22:11 的到场核对片段。22:16 的谈话随原件封存。</dd>
        </dl>
        <blockquote class="quote">
          <small>陈序 · 申请补记</small>
          我后面问了他，下次还要不要我叫他。那句留在原件里就行。
        </blockquote>
        <blockquote class="quote">
          <small>闻舟 · 22:31 复核意见</small>
          同意。你照常叫我。来不来，我自己回你。
        </blockquote>
        <p class="record-note">导入对照　旧回执号与第 03 条入库索引对应。档案恢复时重新生成了索引，签收时间仍为 2024 年 11 月 6 日 ${originalReceipt.time}。</p>
      </div>
    </section>`;
  }

  function archiveFiling() {
    const filed = progress.archiveStage === "filed";
    return `<section class="panel" aria-labelledby="filing-heading">
      <div class="section-head"><h2 id="filing-heading">展签附件登记</h2>
        <span class="status ${filed ? "" : "status-warn"}">${filed ? "已复核" : "待复核"}</span>
      </div>
      <div class="panel-body">
        ${filed ? `<p class="conclusion">公开附件已登记。展签附原始签收单和到场核对片段，谈话原件继续封存。</p>` : `
          <form id="archive-filing">
            <fieldset class="editor">
              <legend>按两人的复核意见，勾选可以随展签公开的附件。</legend>
              ${archiveFiles.map((file) => `<label class="choice attachment-choice">
                <input type="checkbox" name="attachment" value="${file.id}">
                <span><strong>${file.title}</strong><span class="subtle small mono">${file.detail}</span></span>
              </label>`).join("")}
            </fieldset>
            <button class="button detail-action" type="submit">登记所选附件</button>
            <p class="feedback" id="archive-feedback" role="status"></p>
          </form>`}
      </div>
    </section>
    ${filed ? `<section class="panel chapter-end" id="archive-complete" tabindex="-1" aria-labelledby="queue-heading">
      <div class="section-head"><h2 id="queue-heading">待投递留言</h2><span class="mono small">02 号机</span></div>
      <div class="panel-body">
        <dl class="facts">
          <dt>留言创建时间</dt><dd class="mono">2024-11-07 00:03</dd>
          <dt>收件人</dt><dd>本次档案校对人</dd>
          <dt>关联设备</dt><dd><code>${dispatchIndex}</code> · 设备台账未找到对应记录</dd>
        </dl>
        <blockquote class="quote">这回，你也把最后一句留给他了。</blockquote>
        <p class="small muted">第二章《留给谁听》完 · 复核结果已保留</p>
        <div class="actions">
          <a class="button button-secondary" href="${route("replay", { device: dispatchIndex })}">${progress.dispatchStage === "filed" ? "查看留言归档" : "追查留言索引"} →</a>
          <a class="inline-link" href="#claim">返回馆务首页</a>
        </div>
      </div>
    </section>` : ""}`;
  }

  function archivePage(params) {
    const header = intro({
      title: "档案复核", summary: "查验恢复入库的记录及其原始附件。",
      mark: "04 / ARCHIVE REVIEW", metaLabel: "资料批次", metaValue: "LT / 1106",
    });
    if (!progress.correctedAt) return header + `<section class="panel">
      <div class="panel-body"><p>场次展签完成勘误后，才会生成对应的档案复核记录。</p>
        <a class="inline-link" href="#claim">返回馆务公告 →</a></div>
    </section>`;

    const resume = progress.archiveStage && !params.has("receipt") && !params.has("device");
    const receipt = resume ? originalReceipt.id : params.get("receipt") || "";
    const device = resume ? recorder.device : params.get("device") || "";
    const found = matchesArchive(receipt, device);
    return header + `<div class="layout">
      <div class="stack">
        <section class="panel" aria-labelledby="audit-heading">
          <div class="section-head"><h2 id="audit-heading">第 03 条签收 · 入库详情</h2>
            <span class="status status-neutral">${progress.archiveStage === "filed" ? "补录已核" : "待复核"}</span>
          </div>
          <div class="panel-body">
            <dl class="facts">
              <dt>入库时间</dt><dd>${newReceiptTime()}</dd>
              <dt>写入触发</dt><dd>场次展签勘误后重建索引</dd>
              <dt>原记录时间</dt><dd class="mono">${exhibitOrder.date} ${originalReceipt.time}</dd>
              <dt>原登记地点</dt><dd>${originalReceipt.location}</dd>
              <dt>附件状态</dt><dd>有关联封存申请。需核对原回执与设备号。</dd>
            </dl>
            <p class="record-note">工单列表显示的是入库时间。档案恢复时，原来的办理时间保存在索引详情里。</p>
          </div>
        </section>
        <section class="panel" id="archive-lookup" tabindex="-1" aria-labelledby="lookup-heading">
          <div class="section-head"><h2 id="lookup-heading">调阅封存申请</h2><span class="small">核对两项编号</span></div>
          <div class="panel-body">
            <form class="archive-form" data-search="archive" role="search" aria-label="封存申请查询">
              <label>原始签收回执号
                <input type="search" name="receipt" value="${escaped(found ? originalReceipt.id : receipt)}"
                  placeholder="填写器材交接记录上的回执号" required maxlength="70" autocomplete="off">
              </label>
              <label>设备编号
                <input type="search" name="device" value="${escaped(found ? recorder.device : device)}"
                  placeholder="填写录音盒的设备编号" required maxlength="70" autocomplete="off">
              </label>
              <button class="button" type="submit">调阅申请</button>
            </form>
            ${(receipt || device) && !found ? '<p class="feedback" role="status">两项编号未能关联到同一份申请。请核对 22:13 的原始交接记录。</p>' : ""}
          </div>
        </section>
        ${found ? archiveResult() + archiveFiling() : ""}
      </div>
      <aside class="side-card">
        <h3>复核索引</h3>
        <p>这条记录指向 C03 的后门柜交接。回执号可在对应的原始签收条目下查到。</p>
        <p><a class="inline-link" href="${route("orders", { event: exhibitOrder.id, section: "handover" })}">返回器材交接记录 →</a></p>
        <p><a class="inline-link" href="${route("item", { ref: recorder.id })}">查看录音盒登记 →</a></p>
      </aside>
    </div>`;
  }

  function dispatchList() {
    return `<ol class="sequence-list" id="dispatch-list" role="list">
      ${progress.dispatchOrder.map((id, index) => {
        const record = dispatchEntries[id];
        return `<li class="sequence-row">
          <span class="sequence-number mono" aria-hidden="true">0${index + 1}</span>
          <div>
            <h3>${record.title}</h3>
            <p class="small muted">${record.clock} <time class="mono">${record.time}</time></p>
            <p>${record.note}</p>
          </div>
          ${progress.dispatchStage ? "" : `<div class="sequence-controls">
            <button type="button" data-dispatch-move="-1" data-entry="${id}"
              aria-label="上移${record.title}" ${index === 0 ? "disabled" : ""}>↑ 上移</button>
            <button type="button" data-dispatch-move="1" data-entry="${id}"
              aria-label="下移${record.title}" ${index === progress.dispatchOrder.length - 1 ? "disabled" : ""}>↓ 下移</button>
          </div>`}
        </li>`;
      }).join("")}
    </ol>`;
  }

  function dispatchMessage() {
    const filed = progress.dispatchStage === "filed";
    return `<section class="panel" id="restored-dispatch" tabindex="-1" aria-labelledby="dispatch-result-heading">
      <div class="section-head"><h2 id="dispatch-result-heading">恢复出的留言</h2><span class="mono small">${dispatchIndex}</span></div>
      <div class="panel-body">
        <dl class="facts">
          <dt>校正时间</dt><dd class="mono">2024-11-06 23:59</dd>
          <dt>发件人</dt><dd>陈序</dd>
          <dt>原收件人</dt><dd>闻舟</dd>
          <dt>原投递状态</dt><dd>终端关闭前未送达</dd>
        </dl>
        <p class="record-note">待处理页面显示的是当前校对人。原始投递单上的收件人仍是闻舟。</p>
        <div class="track">
          <div class="track-head"><h3>离线语音</h3><span class="mono small muted">23:59</span></div>
          <audio src="assets/dispatch.wav" controls preload="metadata" aria-label="陈序的离线留言"></audio>
        </div>
        <details class="transcript" open>
          <summary>文字稿</summary>
          <p>${dispatchWords}</p>
        </details>
        <section class="document-block">
          <h3>同批附件 · 撤演联签单</h3>
          <p>闻舟、陈序于 22:16 共同确认取消公开演示，保留两人的私下复盘安排。</p>
        </section>
        ${filed ? '<p class="conclusion">留言已归回闻舟名下。展签已补录取消原因。</p>'
          : '<form id="dispatch-filing"><button class="button" type="submit">按原收件人归档</button></form>'}
      </div>
    </section>
    ${filed ? `<section class="panel chapter-end" id="dispatch-complete" tabindex="-1" aria-labelledby="dispatch-end-heading">
      <div class="section-head"><h2 id="dispatch-end-heading">投递状态更新</h2><span class="status status-neutral">已读</span></div>
      <div class="panel-body">
        <p>${progress.readbackVerified ? "这次读取由训练板打开引用预览触发。回执沿用了快照保存的端名。"
          : "归档完成后，投递单多了一次读取。读取端仍显示为 02 号机。"}</p>
        <p class="record-note">机位交接状态　已断电</p>
        <p class="small muted">第三章《照常叫我》完 · 纪念展展签已定稿</p>
        <div class="actions">
          <a class="button button-secondary" href="#readback">${progress.readbackVerified ? "查看已读回执结论" : "追查已读回执"} →</a>
          <a class="inline-link" href="${route("orders", { event: exhibitOrder.id, section: "correction" })}">查看展签定稿</a>
        </div>
      </div>
    </section>` : ""}`;
  }

  function dispatchPage() {
    const header = intro({
      title: "机位投递记录", summary: "复原 02 号机关闭前的离线记录。",
      mark: "05 / TERMINAL DELIVERY", metaLabel: "迁移索引", metaValue: dispatchIndex,
    });
    if (progress.archiveStage !== "filed") return header + `<section class="panel">
      <div class="panel-body"><p>待投递索引会在档案复核完成后开放。</p>
        <a class="inline-link" href="#archive">返回档案复核 →</a></div>
    </section>`;

    return header + `<div class="layout">
      <div class="stack">
        <section class="panel" aria-labelledby="calibration-heading">
          <div class="section-head"><h2 id="calibration-heading">最后一次校时采样</h2><span class="small">关机前比对</span></div>
          <div class="panel-body">
            <p>以下两个读数记录于同一时刻。02 号机的离线记录沿用机位时间。</p>
            <dl class="facts">
              <dt>场馆服务器</dt><dd class="mono">2024-11-06 23:57</dd>
              <dt>02 号机</dt><dd class="mono">2024-11-07 00:01</dd>
            </dl>
          </div>
        </section>
        <section class="panel" aria-labelledby="timeline-heading">
          <div class="section-head"><h2 id="timeline-heading">复原交接顺序</h2><span class="small">按场馆服务器时间</span></div>
          <div class="panel-body">
            <p>${progress.dispatchStage ? "顺序已核对。02 号机快四分钟，留言保存于场馆时间 23:59。"
              : "用上移和下移按真实发生时间排列三条记录，最早的一条放在最上方。"}</p>
            <form id="dispatch-timeline">
              ${dispatchList()}
              ${progress.dispatchStage ? "" : `<button class="button detail-action" type="submit">核对交接顺序</button>
                <p class="feedback" id="dispatch-feedback" role="status"></p>
                <p class="sr-only" id="dispatch-change" aria-live="polite"></p>`}
            </form>
          </div>
        </section>
        ${progress.dispatchStage ? dispatchMessage() : ""}
      </div>
      <aside class="side-card">
        <h3>02 号机移交说明</h3>
        <p>设备移交以服务器时间登记。终端断电时，未发出的留言只保留在离线副本中。</p>
        <p><a class="inline-link" href="${route("replay", { device: dispatchIndex })}">返回回放索引 →</a></p>
      </aside>
    </div>`;
  }

  function readbackGate() {
    return `<section class="panel">
      <div class="panel-body"><p>机位留言完成归档后，可以查询对应的读取回执。</p>
        <a class="inline-link" href="#replay">返回回放查询 →</a></div>
    </section>`;
  }

  function matchesReadback(topic) {
    return topic.source === dispatchIndex && topic.snapshot === readbackSnapshot;
  }

  function readbackPage() {
    const header = intro({
      title: "读取回执", summary: "查验离线留言恢复后的读取记录。",
      mark: "06 / READ RECEIPT", metaLabel: "留言索引", metaValue: dispatchIndex,
    });
    if (progress.dispatchStage !== "filed") return header + readbackGate();
    const linkedTopic = progress.readbackVerified ? boardTopics.find(matchesReadback) : null;
    const boardLink = linkedTopic ? route("board", { thread: linkedTopic.id }) : "#board";
    return header + `<div class="layout">
      <section class="panel" aria-labelledby="readback-heading">
        <div class="section-head"><h2 id="readback-heading">留言读取明细</h2>
          <span class="status status-neutral">${progress.readbackVerified ? "已核对引用" : "引用待核对"}</span>
        </div>
        <div class="panel-body">
          <dl class="facts">
            <dt>留言索引</dt><dd><code>${dispatchIndex}</code></dd>
            <dt>回执显示端</dt><dd>02 号机 · 已断电</dd>
            <dt>引用快照号</dt><dd><code>${readbackSnapshot}</code></dd>
            <dt>关联来源</dt><dd>旧训练留言板</dd>
          </dl>
          ${progress.readbackVerified
            ? '<p class="conclusion">训练板加载留言的引用预览时生成了这条回执。显示端沿用快照中的旧机位名称。</p>'
            : '<p class="record-note">旧帖标题在迁移时丢失。可以用原留言里的一句原话搜索正文或引用，找到快照号相符的旧帖。</p>'}
          <div class="actions">
            <a class="button button-secondary" href="${boardLink}">${linkedTopic ? "查看已恢复的回帖" : "打开旧训练留言板"} →</a>
            <a class="inline-link" href="${route("dispatch", { section: "restored-dispatch" })}">查看原留言</a>
          </div>
        </div>
      </section>
      <aside class="side-card">
        <h3>回执索引说明</h3>
        <p>同一段话可能被抄录多次。引用快照号对应本次读取打开的那一份副本。</p>
      </aside>
    </div>`;
  }

  function restoredReply() {
    return `<section class="panel" id="restored-reply" tabindex="-1" aria-labelledby="reply-heading">
      <div class="section-head"><h2 id="reply-heading">恢复的回帖</h2><span class="status status-neutral">引用已核对</span></div>
      <div class="panel-body">
        <article class="forum-reply">
          <div class="forum-byline"><strong>闻舟</strong><time class="mono small">2024-11-07 09:00</time></div>
          <p>我建好了。右边那格留给你。</p>
        </article>
        <article class="forum-reply">
          <div class="forum-byline"><strong>陈序</strong><time class="mono small">2024-11-07 09:02</time></div>
          <p>到了。耳机我带着。</p>
        </article>
        <p class="record-note">线上训练记录　09:02 双方已入席。左位闻舟，右位陈序。</p>
        <p class="small muted">这条「已读」来自训练帖里的引用预览。两人赴约的时间保存在上面的旧回帖里。</p>
      </div>
    </section>
    <section class="panel chapter-end" aria-labelledby="room-heading">
      <div class="section-head"><h2 id="room-heading">房间快照</h2><span class="status status-neutral">旁听 ${seatingClosed() ? "0" : "1"}</span></div>
      <div class="panel-body">
        <p>快照封存时只有两个座位。恢复回帖后，座位表下面多出了一项。</p>
        <p class="record-note">旁听席　${seatingClosed() ? "校对人已退席" : "已为当前校对人留位"}</p>
        <p class="small muted">第四章《空着的右位》完 · 回执核对结果已保留</p>
        <a class="button button-secondary" href="#seating">${seatingLinkLabel()} →</a>
        <a class="inline-link" href="#claim">返回馆务首页 →</a>
      </div>
    </section>`;
  }

  function boardThread(topic, query, mode) {
    const list = route("board", { q: query, mode });
    const verified = progress.readbackVerified && matchesReadback(topic);
    return `<section class="panel" aria-labelledby="topic-heading">
      <div class="section-head"><h2 id="topic-heading">${topic.title}</h2><span class="status status-neutral">归档帖</span></div>
      <div class="panel-body">
        <div class="forum-byline"><strong>${topic.author}</strong><time class="mono small">${topic.time}</time></div>
        <p>${topic.text}</p>
        <blockquote class="quote"><small>回帖引用</small>${topic.quote}</blockquote>
        <details class="transcript">
          <summary>查看引用信息</summary>
          <dl class="facts forum-quote-facts">
            <dt>原始索引</dt><dd><code>${topic.source}</code></dd>
            <dt>引用快照号</dt><dd><code>${topic.snapshot}</code></dd>
          </dl>
        </details>
        ${verified ? '<p class="conclusion">此引用已与读取回执关联。</p>' : `<form id="readback-match">
          <button class="button button-secondary" type="submit">核对这条引用</button>
          <p class="feedback" id="readback-feedback" role="status"></p>
        </form>`}
        <div class="actions">
          <a class="inline-link" href="${list}">返回帖子列表</a>
          <a class="inline-link" href="#readback">查看读取回执</a>
        </div>
      </div>
    </section>
    ${verified ? restoredReply() : ""}`;
  }

  function boardList(query, mode) {
    const filters = `<div class="filters" aria-label="搜索范围">
      <a href="${route("board", { q: query })}" aria-current="${mode !== "quote"}">正文与引用</a>
      <a href="${route("board", { q: query, mode: "quote" })}" aria-current="${mode === "quote"}">只搜引用</a>
    </div>`;
    const needle = comparable(query);
    const results = boardTopics.filter((topic) => {
      const searchable = mode === "quote" ? topic.quote : `${topic.title} ${topic.text} ${topic.quote}`;
      return comparable(searchable).includes(needle);
    });
    return `<section class="panel" aria-labelledby="board-heading">
      <div class="panel-head"><h2 id="board-heading">训练区归档帖</h2><span class="small">共 ${results.length} 帖</span></div>
      ${search({ page: "board", name: "q", label: "搜索帖子或引用", value: query, placeholder: "输入关键词或留言原话", filters })}
      ${results.length ? `<div class="forum-list">
        ${results.map((topic) => `<a class="forum-topic" href="${route("board", { thread: topic.id, q: query, mode })}">
          <span><strong>${topic.title}</strong><small>${topic.author} · 有引用</small></span>
          <time class="mono small">${topic.time}</time>
        </a>`).join("")}
      </div>` : `<div class="empty" role="status"><p>没有匹配的帖子。</p>
        <a class="inline-link" href="#board">清除搜索条件</a></div>`}
    </section>`;
  }

  function boardPage(params) {
    const header = intro({
      title: "旧训练留言板", summary: "训练区帖文与回帖引用的归档快照。",
      mark: "07 / TRAINING BOARD", metaLabel: "快照日期", metaValue: "2024.11.07",
    });
    if (progress.dispatchStage !== "filed") return header + readbackGate();
    const query = params.get("q") || "";
    const mode = params.get("mode") === "quote" ? "quote" : "";
    const topic = boardTopics.find((entry) => entry.id === params.get("thread"));
    return header + `<div class="layout">
      <div class="stack">${topic ? boardThread(topic, query, mode) : boardList(query, mode)}</div>
      <aside class="side-card">
        <h3>训练区存档</h3>
        <p>可以按正文和引用查询。每份引用的来源及快照号保留在帖子详情里。</p>
        <p><a class="inline-link" href="#readback">返回读取回执 →</a></p>
      </aside>
    </div>`;
  }

  function seatingClosed() {
    return Object.hasOwn(seatEndings, progress.seatStage);
  }

  function seatingLinkLabel() {
    return seatingClosed() ? "查看退席记录" : "查看旁听席登记";
  }

  function seatSnapshot(snapshot) {
    return `<div class="seat-snapshot-head">
      <h3>${snapshot.label}</h3><span class="small mono">${snapshot.id}</span>
    </div>
    <p class="muted small">${snapshot.time}　·　${snapshot.total}</p>
    <ul class="room-seats" aria-label="座位登记">
      ${snapshot.seats.map(([position, name, status]) => `<li>
        <span class="small subtle">${position}</span><strong>${name}</strong><span class="small muted">${status}</span>
      </li>`).join("")}
    </ul>
    <p class="record-note">${snapshot.note}</p>`;
  }

  function seatReview() {
    const options = '<option value="">选择一份记录</option>' + Object.entries(seatSnapshots).map(([key, snapshot]) =>
      `<option value="${key}">${snapshot.label} · ${snapshot.id}</option>`).join("");
    return `<section class="panel" aria-labelledby="seat-review-heading">
      <div class="section-head"><h2 id="seat-review-heading">核对两条席位记录</h2></div>
      <div class="panel-body">
        <form id="seat-review" class="archive-form">
          <label>哪份记录能证明两人实际赴约？
            <select name="arrival" required>${options}</select>
          </label>
          <label>哪份记录能解释旁听席的来历？
            <select name="observer" required>${options}</select>
          </label>
          <button class="button" type="submit">核对席位记录</button>
        </form>
        <p class="feedback" id="seat-review-feedback" role="status"></p>
      </div>
    </section>`;
  }

  function roomNote({ author, time, text }) {
    return `<article class="forum-reply">
      <div class="forum-byline"><strong>${author}</strong><time class="mono small">${time}</time></div>
      <p>${text}</p>
    </article>`;
  }

  function seatOutcome() {
    const closed = seatingClosed();
    return `<section class="panel" id="seat-result" tabindex="-1" aria-labelledby="seat-result-heading">
      <div class="section-head"><h2 id="seat-result-heading">两人房的归档备注</h2><span class="status status-neutral">已核对</span></div>
      <div class="panel-body">
        <p class="conclusion">当年连入房间的只有闻舟和陈序。旁听席在本次恢复回帖时登记，供校对人核对快照。</p>
        ${followUpNotes.map(roomNote).join("")}
        <p class="record-note">原归档备注　出席结果可供馆务核对。房间对话留在两人房的原档案里。</p>
        <form id="seat-filing" aria-label="结束旁听">
          <p>展签可以加上一句赴约事实。你也可以把这次核对留在房间档案里。</p>
          <div class="actions seat-filing-actions">
            <button class="button ${progress.seatStage === "summary" ? "" : "button-secondary"}"
              type="submit" value="summary" aria-pressed="${progress.seatStage === "summary"}">补一条展签附记</button>
            <button class="button ${progress.seatStage === "sealed" ? "" : "button-secondary"}"
              type="submit" value="sealed" aria-pressed="${progress.seatStage === "sealed"}">仅保存在房间档案</button>
          </div>
        </form>
      </div>
    </section>
    ${closed ? `<section class="panel chapter-end" id="seat-exit" tabindex="-1" aria-labelledby="seat-exit-heading">
      <div class="section-head"><h2 id="seat-exit-heading">旁听已结束</h2><span class="status status-neutral">旁听 0</span></div>
      <div class="panel-body">
        <p>${seatEndings[progress.seatStage]}</p>
        <p>退出前，房主最后一次保存的房间名是「明天见」。</p>
        <p class="small muted">第五章《退席之后》完</p>
        <div class="actions">
          <a class="button button-secondary" href="#appointments">${appointmentLinkLabel()} →</a>
          <a class="inline-link" href="${route("orders", { event: exhibitOrder.id, section: "correction" })}">回看展签 →</a>
          <a class="inline-link" href="#claim">返回馆务首页</a>
        </div>
      </div>
    </section>` : ""}`;
  }

  function seatingPage() {
    const header = intro({
      title: "房间席位复核", summary: "对照预约、连入和恢复记录，核对房间里的三个位置。",
      mark: "08 / SEAT RECORD", metaLabel: "房间编号", metaValue: "TR-27",
    });
    if (!progress.readbackVerified) return header + `<section class="panel">
      <div class="panel-body"><p>核对已读回执后，可查阅旧训练房的座位登记。</p>
        <a class="inline-link" href="#readback">返回读取回执 →</a></div>
    </section>`;
    return header + `<div class="layout">
      <div class="stack">
        <section class="panel" aria-labelledby="seat-snapshot-heading">
          <div class="section-head"><h2 id="seat-snapshot-heading">席位快照</h2><span class="status status-neutral">${seatingClosed() ? "已退席" : progress.seatStage ? "已核对" : "待复核"}</span></div>
          <div class="panel-body">
            <div class="actions record-switch" role="group" aria-label="切换席位记录">
              ${Object.entries(seatSnapshots).map(([key, snapshot]) => `<button class="button button-secondary" type="button"
                data-seat-view="${key}" aria-controls="seat-snapshot" aria-pressed="${key === "restored"}">${snapshot.label}</button>`).join("")}
            </div>
            <div class="seat-snapshot" id="seat-snapshot" aria-live="polite">${seatSnapshot(seatSnapshots.restored)}</div>
          </div>
        </section>
        ${progress.seatStage ? seatOutcome() : seatReview()}
      </div>
      <aside class="side-card">
        <h3>查看席位登记</h3>
        <p>预约簿、房间连接日志和恢复会话分别保留了各自时点的名单。切换记录可以查看详细的席位状态。</p>
        <p><a class="inline-link" href="${route("board", { thread: boardTopics.find(matchesReadback).id })}">回看训练帖 →</a></p>
      </aside>
    </div>`;
  }

  function appointmentLinkLabel() {
    return progress.appointmentMatched ? "回看下一次预约" : "查找「明天见」";
  }

  function appointmentDay(params) {
    const day = params.get("day");
    if (Object.hasOwn(appointmentDays, day)) return day;
    return progress.appointmentMatched ? "2024-11-08" : "2024-11-07";
  }

  function appointmentResult() {
    return `<section class="panel chapter-end" id="appointment-result" tabindex="-1" aria-labelledby="appointment-result-heading">
      <div class="section-head"><h2 id="appointment-result-heading">两份签收回执</h2><span class="status status-neutral">已关联</span></div>
      <div class="panel-body">
        <p class="conclusion">${appointmentRoom} · 2024-11-08 09:00 · 陈序开房 · 闻舟已连入</p>
        ${[
          { author: "陈序 · 开房回执", time: "2024-11-08 08:58", text: "我先开了。左边还是你的。" },
          { author: "闻舟 · 到场回执", time: "2024-11-08 09:00", text: "听见了。我到了就进。下回你接着叫我。" },
        ].map(roomNote).join("")}
        <p class="record-note">两份回执归入同一间房。陈序沿用了闻舟保存的房名「明天见」。</p>
        <p class="small muted">第六章《还这个点》完</p>
        <div class="actions">
          <a class="button button-secondary" href="#training">${trainingLinkLabel()} →</a>
          <a class="inline-link" href="#claim">返回馆务首页</a>
        </div>
      </div>
    </section>`;
  }

  function appointmentsPage(params) {
    const header = intro({
      title: "同名房间预约", summary: "从旧预约表找出退席便签对应的下一间房。",
      mark: "09 / ROOM BOOKING", metaLabel: "房间名", metaValue: "明天见",
    });
    if (!seatingClosed()) return header + `<section class="panel">
      <div class="panel-body"><p>结束旁听后，可查阅房主留下的下一次预约。</p>
        <a class="inline-link" href="#seating">返回房间席位复核 →</a></div>
    </section>`;
    const selectedDay = appointmentDay(params);
    const day = appointmentDays[selectedDay];
    return header + `<div class="layout">
      <div class="stack">
        <section class="panel" aria-labelledby="appointment-notes-heading">
          <div class="section-head"><h2 id="appointment-notes-heading">退席时的便签</h2><span class="small muted">TR-27 房间存档</span></div>
          <div class="panel-body">
            ${followUpNotes.map(roomNote).join("")}
            <p class="record-note">原预约开始于 09:00。两人约定下一间房仍保留两个队员位，旁听关闭。</p>
          </div>
        </section>
        <section class="panel" id="appointment-records" tabindex="-1" aria-labelledby="appointment-list-heading">
          <div class="section-head"><h2 id="appointment-list-heading">「明天见」预约表</h2><span class="small muted">当地时间</span></div>
          <div class="panel-body">
            <nav class="actions record-switch" aria-label="预约日期">
              ${Object.entries(appointmentDays).map(([date, entry]) => `<a class="button button-secondary"
                href="${route("appointments", { day: date, section: "appointment-records" })}" ${date === selectedDay ? 'aria-current="page"' : ""}>${entry.label}</a>`).join("")}
            </nav>
            <form id="appointment-calendar" aria-label="核对预约">
              <ul class="appointment-list" aria-label="${day.label}的同名预约">
                ${day.rooms.map((room) => `<li class="appointment-row">
                  <div><h3><time class="mono">${room.time}</time>　明天见</h3>
                    <p class="small muted">${room.host} 开房 · 双人位 · 旁听${room.observers ? "开放" : "关闭"}</p></div>
                  <span class="mono small subtle">${room.id}</span>
                  ${progress.appointmentMatched ? (room.id === appointmentRoom ? '<span class="status status-neutral">已关联回执</span>' : "")
                    : `<button type="submit" value="${room.id}" class="button button-secondary"
                      aria-label="核对房间 ${room.id} 的预约">核对预约</button>`}
                </li>`).join("")}
              </ul>
              <p class="feedback" id="appointment-feedback" role="status" tabindex="-1"></p>
            </form>
          </div>
        </section>
        ${progress.appointmentMatched ? appointmentResult() : ""}
      </div>
      <aside class="side-card">
        <h3>同名房间说明</h3>
        <p>房间可以沿用旧名字。用便签里的约定核对预约日期、开始时间、开房人和旁听设置。</p>
        <p><a class="inline-link" href="${route("seating", { section: "seat-exit" })}">回看退席记录 →</a></p>
      </aside>
    </div>`;
  }

  function trainingLinkLabel() {
    return progress.trainingAligned ? "回看双轨录音" : "校对双轨训练录音";
  }

  function trainingTime(seconds) {
    return `00:${String(seconds).padStart(2, "0")}`;
  }

  function trainingShiftLabel(shift) {
    if (!shift) return "保持原位";
    return `${shift < 0 ? "提前" : "延后"} ${Math.abs(shift)} 秒`;
  }

  function trainingRuler(shift) {
    return `<div class="training-ticks mono small muted" aria-hidden="true">
      <span>00:00</span><span>00:04</span><span>00:08</span><span>00:12</span>
    </div>
    ${trainingTracks.map((track) => {
      const offset = track.id === "B" ? shift : 0;
      const tap = track.tap + offset;
      const voice = track.voice + offset;
      return `<div class="training-ruler-row">
        <strong>${track.id} 轨 · ${track.speaker}</strong>
        <div class="training-line" aria-hidden="true">
          <span class="training-mark training-tap" style="--marker: ${tap * 100 / 12}%">◆</span>
          <span class="training-mark training-voice" style="--marker: ${voice * 100 / 12}%">●</span>
        </div>
        <p class="mono small muted">敲击 ${trainingTime(tap)}　发声 ${trainingTime(voice)}</p>
      </div>`;
    }).join("")}`;
  }

  function trainingSequence() {
    return trainingTracks.map((track) => ({
      ...track, start: track.voice + (track.id === "B" ? trainingOffset : 0),
    })).sort((a, b) => a.start - b.start);
  }

  function trainingReview() {
    return `<section class="panel" aria-labelledby="training-review-heading">
      <div class="section-head"><h2 id="training-review-heading">把两轨对到同一声敲击</h2></div>
      <div class="panel-body">
        <form id="training-review">
          <label for="training-shift"><strong>B 轨时间偏移</strong></label>
          <div class="training-shift-control">
            <input type="range" id="training-shift" name="shift" min="-4" max="4" step="1" value="0"
              aria-valuetext="保持原位">
            <output id="training-shift-label" for="training-shift">保持原位</output>
          </div>
          <p class="small muted">往左提前，往右延后。◆ 为敲击，● 为开始发声。</p>
          <div class="training-ruler" id="training-ruler">${trainingRuler(0)}</div>
          <fieldset class="editor">
            <legend>对齐之后，谁先开口？</legend>
            ${trainingTracks.map((track) => `<label class="choice">
              <input type="radio" name="first" value="${track.id}" required><span>${track.speaker}（${track.id} 轨）</span>
            </label>`).join("")}
          </fieldset>
          <button class="button" type="submit">提交顺序校对</button>
        </form>
        <p class="feedback" id="training-feedback" role="status"></p>
      </div>
    </section>`;
  }

  function trainingResult() {
    return `<section class="panel chapter-end" id="training-result" tabindex="-1" aria-labelledby="training-result-heading">
      <div class="section-head"><h2 id="training-result-heading">还原的第一轮对话</h2><span class="status status-neutral">顺序已核对</span></div>
      <div class="panel-body">
        <p class="conclusion">B 轨${trainingShiftLabel(trainingOffset)}。两轨敲击落在 ${trainingTime(trainingTracks[0].tap)}。</p>
        <div class="track">
          <h3>合轨回放</h3>
          <p class="small muted">左声道 A · 右声道 B</p>
          <audio src="assets/training-aligned.wav" controls preload="metadata" aria-label="校对后的双声道录音"></audio>
        </div>
        ${trainingSequence().map((track) => roomNote({
          author: track.speaker, time: trainingTime(track.start), text: track.text,
        })).join("")}
        <p class="record-note">房间存档附言　把这两句留在同一条记录里。</p>
        <p class="small muted">第七章《同一声敲击》完</p>
        <div class="actions">
          <a class="button button-secondary" href="#retention">${retentionLinkLabel()} →</a>
          <a class="inline-link" href="${route("appointments", { section: "appointment-result" })}">回看两份签收回执</a>
        </div>
      </div>
    </section>`;
  }

  function trainingPage() {
    const header = intro({
      title: "双轨训练录音", summary: "两台设备分别保存了同一间训练房的开场片段。",
      mark: "10 / TRACK REVIEW", metaLabel: "房间编号", metaValue: appointmentRoom,
    });
    if (!progress.appointmentMatched) return header + `<section class="panel">
      <div class="panel-body"><p>关联两份预约签收回执后，可查阅对应房间的训练录音。</p>
        <a class="inline-link" href="#appointments">返回同名房间预约 →</a></div>
    </section>`;
    return header + `<div class="layout">
      <div class="stack">
        <section class="panel" aria-labelledby="training-sources-heading">
          <div class="section-head"><h2 id="training-sources-heading">两轨原始录音</h2><span class="small muted">各自从 00:00 起算</span></div>
          <div class="panel-body">
            <p class="record-note">旧摘要把 00:06 的 A 轨发言排在 00:08 的 B 轨发言之前。房间记录只记了一次对拍敲击。</p>
            <div class="training-clips">
              ${trainingTracks.map((track) => `<div class="track">
                <h3>${track.id} 轨 · ${track.seat}${track.speaker}</h3>
                <p class="small muted">敲击 ${trainingTime(track.tap)}　发声 ${trainingTime(track.voice)}</p>
                <audio src="${track.file}" controls preload="metadata" aria-label="${track.id} 轨原始录音"></audio>
                <details class="transcript"><summary>文字稿</summary><p>${track.text}</p></details>
              </div>`).join("")}
            </div>
          </div>
        </section>
        ${progress.trainingAligned ? trainingResult() : trainingReview()}
      </div>
      <aside class="side-card">
        <h3>对拍记录</h3>
        <p>开场前在桌上敲一下，两台设备都收到了这声。以 A 轨作参照，移动 B 轨，把两个拍点放到同一位置。</p>
        <p><a class="inline-link" href="${route("appointments", { section: "appointment-result" })}">查看预约签收回执 →</a></p>
      </aside>
    </div>`;
  }

  function retentionLinkLabel() {
    return progress.excerptSaved ? "回看留存回执" : "处理联签留存单";
  }

  function excerptTime(tenths) {
    return `${trainingTime(Math.floor(tenths / 10))}.${tenths % 10}`;
  }

  function retentionReview() {
    return `<section class="panel" aria-labelledby="retention-review-heading">
      <div class="section-head"><h2 id="retention-review-heading">标记连续留存片段</h2></div>
      <div class="panel-body">
        <form id="retention-review">
          <fieldset class="editor">
            <legend>按留存单选择起点和终点，让两句对话完整留在同一段里。</legend>
            <ol class="retention-cues" aria-label="合轨收声标记">
              ${excerptMarks.map((mark) => `<li class="retention-cue" data-excerpt-time="${mark.time}">
                <div><time class="mono small muted">${excerptTime(mark.time)}</time><h3>${mark.label}</h3></div>
                <div class="retention-points">
                  <label><input type="radio" name="start" value="${mark.time}" required
                    aria-label="${mark.label}设为起点">起点</label>
                  <label><input type="radio" name="end" value="${mark.time}" required
                    aria-label="${mark.label}设为终点">终点</label>
                </div>
              </li>`).join("")}
            </ol>
          </fieldset>
          <p class="record-note" id="retention-range-label" aria-live="polite">起点待选　终点待选</p>
          <button class="button" type="submit">提交留存范围</button>
        </form>
        <p class="feedback" id="retention-feedback" role="status"></p>
      </div>
    </section>`;
  }

  function retentionResult() {
    return `<section class="panel chapter-end" id="retention-result" tabindex="-1" aria-labelledby="retention-result-heading">
      <div class="section-head"><h2 id="retention-result-heading">共同留存回执</h2><span class="status status-neutral">两句同存</span></div>
      <div class="panel-body">
        <p class="conclusion">${excerptTime(keptExcerpt.start)} 至 ${excerptTime(keptExcerpt.end)} · ${keptDuration} 秒 · ${appointmentRoom} 房间档案</p>
        <div class="track">
          <h3>留存片段试听</h3>
          <p class="small muted">留存件 <code>${keptArchive.id}</code></p>
          ${keptAudio("两句共同留存的录音")}
        </div>
        ${[
          { author: "陈序 · 留存签收", time: "2024-11-08 09:11", text: "给你留了一份。下次开麦，我还是先问一声。" },
          { author: "闻舟 · 留存签收", time: "2024-11-08 09:12", text: "收到了。你问，我就答。" },
        ].map(roomNote).join("")}
        <p class="small muted">第八章《留在一起》完</p>
        <div class="actions">
          <a class="button button-secondary" href="#screening">${screeningLinkLabel()} →</a>
          <a class="inline-link" href="${route("training", { section: "training-result" })}">回看合轨记录 →</a>
        </div>
      </div>
    </section>`;
  }

  function keptAudio(label) {
    return `<audio src="${keptArchive.file}" controls preload="metadata" aria-label="${label}"></audio>
      <details class="transcript"><summary>文字稿</summary><ol>
        ${trainingSequence().map((track) => `<li><strong>${track.speaker}</strong>　${track.text}</li>`).join("")}
      </ol></details>`;
  }

  function retentionPage() {
    const header = intro({
      title: "联签留存单", summary: "从校对后的训练录音中，保留两人共同选中的一段对话。",
      mark: "11 / JOINT RECORD", metaLabel: "房间编号", metaValue: appointmentRoom,
    });
    if (!progress.trainingAligned) return header + `<section class="panel">
      <div class="panel-body"><p>完成双轨校对后，可查看这间房的联签留存单。</p>
        <a class="inline-link" href="#training">返回双轨训练录音 →</a></div>
    </section>`;
    return header + `<div class="layout">
      <div class="stack">
        <section class="panel" aria-labelledby="retention-notes-heading">
          <div class="section-head"><h2 id="retention-notes-heading">两人的留存说明</h2><span class="small muted">房间存档附页</span></div>
          <div class="panel-body">
            ${[
              { author: "陈序", time: "2024-11-08 09:08", text: "从我问「你听见没」的地方留。前面敲桌子的那一声只是对拍用的。" },
              { author: "闻舟", time: "2024-11-08 09:09", text: "留到我说完「我没挂」。这两句一起放，尾音过了就可以收。" },
            ].map(roomNote).join("")}
            <details class="transcript"><summary>听原合轨录音</summary>
              <div class="track"><audio src="assets/training-aligned.wav" controls preload="metadata" aria-label="留存单对应的原合轨录音"></audio></div>
            </details>
          </div>
        </section>
        ${progress.excerptSaved ? retentionResult() : retentionReview()}
      </div>
      <aside class="side-card">
        <h3>收声表说明</h3>
        <p>表里用的是合轨后的时间。闻舟接话的时候，陈序还在说，两人的留存说明指向同一个连续片段。</p>
        <p><a class="inline-link" href="${route("training", { section: "training-result" })}">查看校对后的发言顺序 →</a></p>
      </aside>
    </div>`;
  }

  function screeningLinkLabel() {
    return progress.screeningRebuilt ? "回看展厅复原" : "核对纪念展放映台账";
  }

  function screeningReview() {
    return `<section class="panel" aria-labelledby="screening-review-heading">
      <div class="section-head"><h2 id="screening-review-heading">复原展厅输出</h2></div>
      <div class="panel-body">
        <form class="stack" id="screening-review">
          <div class="archive-form"><label>终端回执号
            <input type="search" name="receipt" placeholder="填写正场放映对应的编号"
              required maxlength="24" autocomplete="off">
          </label></div>
          <fieldset class="editor">
            <legend>勾选正场展播时实际送到展厅的内容。</legend>
            <label class="choice"><input type="checkbox" name="image"> 展签画面</label>
            <label class="choice"><input type="checkbox" name="sound"> 两人的录音原声</label>
          </fieldset>
          <div><button class="button" type="submit">复原正场放映</button></div>
        </form>
        <p class="feedback" id="screening-feedback" role="status"></p>
      </div>
    </section>`;
  }

  function screeningResult() {
    return `<section class="panel chapter-end" id="screening-result" tabindex="-1" aria-labelledby="screening-result-heading">
      <div class="section-head"><h2 id="screening-result-heading">展厅放映复原</h2><span class="status status-neutral">已核对</span></div>
      <div class="panel-body">
        <p class="conclusion">展务在开场前撤下了原声。画面照常放映 ${keptDuration} 秒，厅屏按画面启动记了一次「已播」。</p>
        <div class="screening-frame">
          <span class="mono small">${screeningSlot.terminal} · ${screeningSlot.time}</span>
          <p id="screening-projection">待机</p>
        </div>
        <div class="actions">
          <button class="button button-secondary" type="button" id="screening-preview">重放展厅画面</button>
          <p class="small muted" id="screening-preview-status" role="status">画面 ${keptDuration} 秒 · 原声 0 秒</p>
        </div>
        <div class="document-block">
          <h3>放映变更联签单</h3>
          <div class="stack">
            ${[
              { author: "陈序", time: "2026-11-06 13:48", text: "片名留着就行。开头那声「你听见没」，我当时是问他的。" },
              { author: "闻舟", time: "2026-11-06 13:50", text: "同意撤原声。你那份我再备一份，省得下回又只剩半句。" },
            ].map(roomNote).join("")}
          </div>
        </div>
        <p class="record-note">散场交接单上，副本的归还地点填的是「${handoffSlip.label}」。</p>
        <p class="small muted">第九章《无声放映》完</p>
        <div class="actions">
          ${handoffLink("button button-secondary")}
          <a class="inline-link" href="${route("retention", { section: "retention-result" })}">回听房间留存原声 →</a>
        </div>
      </div>
    </section>`;
  }

  function screeningPage() {
    const header = intro({
      title: "纪念展放映台账", summary: "查阅首场展播排期及同批导出的终端回执。",
      mark: "12 / EXHIBITION PLAYBACK", metaLabel: "展播日期", metaValue: screeningSlot.date,
    });
    if (!progress.excerptSaved) return header + `<section class="panel">
      <div class="panel-body"><p>登记共同留存回执后，可核对对应片段的展播记录。</p>
        <a class="inline-link" href="#retention">返回联签留存单 →</a></div>
    </section>`;
    return header + `<div class="layout">
      <div class="stack">
        <section class="panel" aria-labelledby="screening-slot-heading">
          <div class="section-head"><h2 id="screening-slot-heading">首场展播排期</h2><span class="status status-neutral">已播</span></div>
          <div class="panel-body">
            <dl class="facts">
              <dt>节目单</dt><dd>第 04 项 · 《${screeningSlot.title}》</dd>
              <dt>开场时间</dt><dd class="mono">${screeningSlot.date} ${screeningSlot.time}</dd>
              <dt>指定终端</dt><dd>${screeningSlot.terminal}</dd>
              <dt>节目时长</dt><dd>${keptDuration} 秒</dd>
            </dl>
            <p class="record-note">值班员手记　台账跳到「已播」。我站在音箱下面，从头等到切下一项，也没听见开口。</p>
          </div>
        </section>
        <section class="panel" aria-labelledby="screening-receipts-heading">
          <div class="section-head"><h2 id="screening-receipts-heading">终端回执</h2><span class="small muted">同日导出 · 3 份</span></div>
          <div class="panel-body stack">
            ${screeningReceipts.map((receipt) => `<details class="transcript">
              <summary><code>${receipt.id}</code>　${receipt.time} · ${receipt.terminal}</summary>
              <dl class="facts document-block">
                <dt>画面输出</dt><dd>${receipt.image} · ${receipt.imageSeconds.toFixed(1)} 秒</dd>
                <dt>声音输出</dt><dd>${receipt.sound} · ${receipt.soundSeconds.toFixed(1)} 秒</dd>
              </dl>
              <p class="small muted">${receipt.note}</p>
            </details>`).join("")}
          </div>
        </section>
        ${progress.screeningRebuilt ? screeningResult() : screeningReview()}
      </div>
      <aside class="side-card">
        <h3>回执查询须知</h3>
        <p>同批回执包含试机、复核台和展厅的记录。按排期里的开场时间和指定终端查找正场回执。</p>
        <p><a class="inline-link" href="${route("retention", { section: "retention-result" })}">查看共同留存回执 →</a></p>
      </aside>
    </div>`;
  }

  function handoffLink(className) {
    const section = progress.handoffVerified ? "handoff-result" : "";
    return `<a class="${className}" href="${route("handoff", { section })}">${progress.handoffVerified ? "回看散场签收" : "追查散场交接单"} →</a>`;
  }

  function handoffHistory() {
    return `<p class="record-note">同一库区的柜体可以使用相同的地点名。点柜体编号查它在展览当天的盘点记录。</p>
      <ul class="ledger-list" aria-label="封馆时的柜体">
        ${Object.entries(handoffCabinets).map(([id, cabinet]) => `<li class="ledger-row">
          <div><h3>${cabinet.label}</h3><p class="small muted">${cabinet.description}</p></div>
          <span class="status status-neutral">${cabinet.move}</span>
          <a class="button button-secondary mono" href="${route("handoff", { cabinet: id, section: "handoff-ledger" })}"
            aria-label="查柜体 ${id} 的展期流水">${id} →</a>
        </li>`).join("")}
      </ul>`;
  }

  function handoffLedger(id, cabinet) {
    return `<dl class="facts">
        <dt>柜体编号</dt><dd><code>${id}</code></dd>
        <dt>封馆时的地点签</dt><dd>${cabinet.label}</dd>
        <dt>封馆撤场登记</dt><dd>${cabinet.move}</dd>
        <dt>展期盘点位置</dt><dd>${cabinet.current}</dd>
      </dl>
      ${cabinet.receipts.length ? `<form id="handoff-review" data-cabinet="${id}" aria-label="核对散场归还流水">
        <ul class="ledger-list" aria-label="展期柜体流水">
          ${cabinet.receipts.map((receipt) => `<li class="ledger-row">
            <div><h3><time class="mono">${receipt.time}</time>　${receipt.action}</h3>
              <p class="small muted">封套 <code>${receipt.seal}</code></p></div>
            ${progress.handoffVerified ? "" : `<button class="button button-secondary" type="submit" value="${receipt.id}"
              aria-label="核对 ${receipt.time} ${receipt.seal} ${receipt.action}">核对这笔</button>`}
          </li>`).join("")}
        </ul>
        <p class="feedback" id="handoff-feedback" role="status" tabindex="-1"></p>
      </form>` : '<p class="record-note">该柜随旧馆原地封存，展期没有收发流水。</p>'}
      <p><a class="inline-link" href="${route("handoff", { section: "handoff-ledger" })}">返回封馆柜体台账 →</a></p>`;
  }

  function handoffResult() {
    const cabinet = handoffCabinets[movedCabinet];
    return `<section class="panel chapter-end" id="handoff-result" tabindex="-1" aria-labelledby="handoff-result-heading">
      <div class="section-head"><h2 id="handoff-result-heading">完整交接联</h2><span class="status status-neutral">收讫</span></div>
      <div class="panel-body">
        <p class="conclusion">封馆当天，${movedCabinet} 活动柜随撤场器材从前门运出。副本在${cabinet.current}归还，归还联沿用了柜体原来的地点签。</p>
        <dl class="facts">
          <dt>封套</dt><dd><code>${handoffSlip.seal}</code> · ${appointmentRoom} 原声副本</dd>
          <dt>归还</dt><dd>${handoffSlip.sender} · ${handoffSlip.time}</dd>
          <dt>签收</dt><dd>闻舟 · 14:21</dd>
        </dl>
        <div class="stack">
          ${[
            { author: `${handoffSlip.sender} · 归还联`, time: `${screeningSlot.date} ${handoffSlip.time}`, text: "耳机线换过了，和副本装在一块。你拆了试试。" },
            { author: "闻舟 · 签收联", time: `${screeningSlot.date} 14:21`, text: "两边都响。下次我开房，你到点进来。" },
          ].map(roomNote).join("")}
        </div>
        <p class="record-note">签收联夹页　续开申请附了两年前的房间卡。</p>
        <p class="small muted">第十章《封门之后》完</p>
        <div class="actions">
          ${renewalLink("button button-secondary")}
          <a class="inline-link" href="${route("screening", { section: "screening-result" })}">回看展厅放映复原 →</a>
        </div>
      </div>
    </section>`;
  }

  function handoffPage(params) {
    const header = intro({
      title: "散场移交查询", summary: "将展后的归还联与柜体盘点记录关联，调阅对应的签收联。",
      mark: "13 / EQUIPMENT RETURN", metaLabel: "交接单号", metaValue: handoffSlip.id,
    });
    if (!progress.screeningRebuilt) return header + `<section class="panel">
      <div class="panel-body"><p>完成展厅放映复原后，可调阅原声副本的散场交接单。</p>
        <a class="inline-link" href="#screening">返回纪念展放映台账 →</a></div>
    </section>`;
    const id = params.get("cabinet");
    const cabinet = Object.hasOwn(handoffCabinets, id) ? handoffCabinets[id] : null;
    return header + `<div class="layout">
      <div class="stack">
        <section class="panel" aria-labelledby="handoff-slip-heading">
          <div class="section-head"><h2 id="handoff-slip-heading">散场归还联</h2><span class="small muted">地点按原件抄录</span></div>
          <div class="panel-body">
            <dl class="facts">
              <dt>归还物</dt><dd>《${screeningSlot.title}》原声副本</dd>
              <dt>归还地点</dt><dd>${handoffSlip.label}</dd>
              <dt>归还时间</dt><dd class="mono">${screeningSlot.date} ${handoffSlip.time}</dd>
              <dt>归还人</dt><dd>${handoffSlip.sender}</dd>
              <dt>封套编号</dt><dd><code>${handoffSlip.seal}</code></dd>
            </dl>
            <p class="record-note">签收联在柜体流水里另行登记。核对归还时间和封套编号后，可调出完整交接联。</p>
          </div>
        </section>
        <section class="panel" id="handoff-ledger" tabindex="-1" aria-labelledby="handoff-ledger-heading">
          <div class="section-head"><h2 id="handoff-ledger-heading">${cabinet ? "展期柜体流水" : "封馆柜体台账"}</h2>
            <span class="small muted">${cabinet ? screeningSlot.date : "2024-11-07"}</span></div>
          <div class="panel-body">${cabinet ? handoffLedger(id, cabinet) : handoffHistory()}</div>
        </section>
        ${progress.handoffVerified ? handoffResult() : ""}
      </div>
      <aside class="side-card">
        <h3>旧馆后门封条验签</h3>
        <dl class="facts">
          <dt>贴封</dt><dd>2024-11-07 · LT-F13</dd>
          <dt>外侧巡检</dt><dd>${screeningSlot.date} 14:30</dd>
          <dt>记录</dt><dd>原编号一致，封条完整。</dd>
        </dl>
        <p><a class="inline-link" href="${route("screening", { section: "screening-result" })}">返回展厅放映复原 →</a></p>
      </aside>
    </div>`;
  }

  function renewalTime(minute) {
    const hours = String(Math.floor(minute / 60)).padStart(2, "0");
    const minutes = String(minute % 60).padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  function renewalRange(start, end) {
    return `${renewalTime(start)}–${renewalTime(end)}`;
  }

  function renewalConflict(start) {
    if (!renewalBlocks.includes(start)) return "请在日历上选一个起点。";
    const end = start + renewalPlan.duration;
    const { host, guest, inspection } = renewalPlan;
    if (start < host.start || end > host.end) {
      return `这段时间超出了${host.name}的空档 ${renewalRange(host.start, host.end)}。再核对开房便签。`;
    }
    if (start < guest.start || end > guest.end) {
      return `这段时间超出了${guest.name}的空档 ${renewalRange(guest.start, guest.end)}。请给他留完整的十分钟。`;
    }
    if (start < inspection.end && end > inspection.start) {
      return `这十分钟会占到 ${renewalRange(inspection.start, inspection.end)} 的巡检时段。再找连续两格空闲。`;
    }
    return "";
  }

  function renewalLink(className) {
    const restored = progress.renewalStart !== null;
    return `<a class="${className}" href="${route("renewal", { section: restored ? "renewal-result" : "" })}">${restored ? "回看续约回签" : "查阅训练房续约"} →</a>`;
  }

  function renewalReview() {
    return `<section class="panel" aria-labelledby="renewal-calendar-heading">
      <div class="section-head"><h2 id="renewal-calendar-heading">训练房日历</h2><span class="small muted">每格 ${renewalStep} 分钟</span></div>
      <div class="panel-body">
        <form class="stack" id="renewal-review">
          <fieldset class="editor">
            <legend>选一个起点，让两人有完整的 ${renewalPlan.duration} 分钟，且房间全程可用。</legend>
            <ol class="renewal-calendar" aria-label="训练房五分钟时段">
              ${renewalBlocks.map((start) => {
                const inspection = start >= renewalPlan.inspection.start && start < renewalPlan.inspection.end;
                const canStart = start + renewalPlan.duration <= renewalBlocks.at(-1) + renewalStep;
                return `<li class="renewal-block${inspection ? " renewal-maintenance" : ""}" data-renewal-minute="${start}">
                  <div class="renewal-block-details"><span class="mono">${renewalRange(start, start + renewalStep)}</span>
                    <span class="small">${inspection ? "例行巡检" : "房间空闲"}</span></div>
                  ${canStart ? `<label><input type="radio" name="start" value="${start}" required
                    aria-label="从 ${renewalTime(start)} 开始">从这格开始</label>` : ""}
                </li>`;
              }).join("")}
            </ol>
          </fieldset>
          <p class="record-note" id="renewal-selection" aria-live="polite">拟邀约时段　待选</p>
          <div><button class="button" type="submit">查找这段续约的回签</button></div>
        </form>
        <p class="feedback" id="renewal-feedback" role="status" tabindex="-1"></p>
      </div>
    </section>`;
  }

  function renewalResult() {
    const start = progress.renewalStart;
    const { date, duration, host, guest } = renewalPlan;
    return `<section class="panel chapter-end" id="renewal-result" tabindex="-1" aria-labelledby="renewal-result-heading">
      <div class="section-head"><h2 id="renewal-result-heading">续约正本与回签</h2><span class="status status-neutral">已回签</span></div>
      <div class="panel-body">
        <p class="conclusion">「明天见」 · ${date} ${renewalRange(start, start + duration)}</p>
        <dl class="facts">
          <dt>开房人</dt><dd>${host.name}</dd>
          <dt>邀请收件人</dt><dd>${guest.name}</dd>
          <dt>房间编号</dt><dd><code>${appointmentRoom}</code> · 双人位</dd>
        </dl>
        <div class="stack">
          ${[
            { author: `${host.name} · 发出邀请`, time: `${screeningSlot.date} 14:27`, text: "我挑好了。明早我先叫你，你想说什么，到房里再说。" },
            { author: `${guest.name} · 续约回签`, time: `${screeningSlot.date} 14:28`, text: "看见了。这回是你先叫的我。我会提前两分钟到。" },
          ].map(roomNote).join("")}
        </div>
        <p class="record-note">开场备忘　先进房试麦。第一分钟，别开录音。</p>
        <p class="small muted">第十一章《这次我开》完</p>
        <div class="actions">
          ${openingLink("button button-secondary")}
          <a class="inline-link" href="${route("handoff", { section: "handoff-result" })}">回看散场签收 →</a>
        </div>
      </div>
    </section>`;
  }

  function renewalPage() {
    const header = intro({
      title: "训练房续约登记", summary: "核对续开便签与房间日历，查找这次邀请的正本和回签。",
      mark: "14 / ROOM RENEWAL", metaLabel: "续约日期", metaValue: renewalPlan.date,
    });
    if (!progress.handoffVerified) return header + `<section class="panel">
      <div class="panel-body"><p>调阅完整交接联后，可查阅签收人附上的续开申请。</p>
        <a class="inline-link" href="#handoff">返回散场移交查询 →</a></div>
    </section>`;
    return header + `<div class="layout">
      <div class="stack">
        <section class="panel" aria-labelledby="renewal-notes-heading">
          <div class="section-head"><h2 id="renewal-notes-heading">展后续开便签</h2>
            <span class="status status-neutral">${progress.renewalStart === null ? "待关联回签" : "回签已关联"}</span></div>
          <div class="panel-body stack">
            ${[
              { author: `${renewalPlan.host.name} · 续开申请`, time: `${screeningSlot.date} 14:23`, text: "明早九点零五能上，九点半要走。还用那间老房，我来开。给咱俩挑十分钟。" },
              { author: `${renewalPlan.guest.name} · 展务便签`, time: `${screeningSlot.date} 14:26`, text: "九点我就在。九点二十五得去前台交钥匙。留够十分钟，我想把刚才那句话说完。" },
            ].map(roomNote).join("")}
          </div>
        </section>
        ${progress.renewalStart === null ? renewalReview() : renewalResult()}
      </div>
      <aside class="side-card">
        <h3>旧预约卡</h3>
        <dl class="facts">
          <dt>房间名</dt><dd>明天见</dd>
          <dt>房间编号</dt><dd><code>${appointmentRoom}</code></dd>
          <dt>旧开房记录</dt><dd>2024-11-08 09:00 · 陈序</dd>
          <dt>房间设置</dt><dd>双人位 · 关闭旁听</dd>
        </dl>
        <p>续开申请沿用这间房的设置。新日期和开房人登记在续约正本里。</p>
        <p><a class="inline-link" href="${route("appointments", { section: "appointment-result" })}">查看旧预约回执 →</a></p>
      </aside>
    </div>`;
  }

  function openingLink(className) {
    const verified = progress.openingVerified;
    return `<a class="${className}" href="${route("opening", { section: verified ? "opening-result" : "" })}">${verified ? "回看开场复核" : "查阅开场回放索引"} →</a>`;
  }

  function openingReview() {
    return `<section class="panel" aria-labelledby="opening-review-heading">
      <div class="section-head"><h2 id="opening-review-heading">复核首分钟索引</h2></div>
      <div class="panel-body">
        <form class="archive-form" id="opening-review">
          <label>第一分钟的原始声轨
            <select name="track" required>
              <option value="">选择录音状态</option>
              <option value="lost">录音已生成，原件丢失</option>
              <option value="none">按约定未开启录音</option>
              <option value="muted">录音已生成，播放器静音</option>
            </select>
          </label>
          <label>恢复预览里的声音来源
            <select name="source" required>
              <option value="">选择音频来源</option>
              <option value="current">本次续约的第一分钟</option>
              <option value="test">展厅扬声器的试音</option>
              <option value="kept">两年前的共同留存件</option>
            </select>
          </label>
          <button class="button" type="submit">修复回放索引</button>
        </form>
        <p class="feedback" id="opening-feedback" role="status" tabindex="-1"></p>
      </div>
    </section>`;
  }

  function openingResult() {
    return `<section class="panel chapter-end" id="opening-result" tabindex="-1" aria-labelledby="opening-result-heading">
      <div class="section-head"><h2 id="opening-result-heading">第一分钟按约留白</h2><span class="status status-neutral">索引已修复</span></div>
      <div class="panel-body">
        <p class="conclusion">两人如约进了房间。录音器在一分钟后才启动，恢复页给首分钟接上了同一房间两年前的留存预览。</p>
        <p class="record-note">索引状态更新　首段记为「未采集」。旧预览的关联已解除，留存件可凭原编号调阅。</p>
        <p class="small muted">第十二章《空白的一分钟》完</p>
        <div class="actions">
          ${closingLink("button button-secondary")}
          <a class="inline-link" href="${route("retention", { section: "retention-result" })}">回看原留存件 →</a>
        </div>
      </div>
    </section>`;
  }

  function openingPage() {
    const header = intro({
      title: "续约开场档案", summary: "复核恢复预览与实际录音的对应关系。",
      mark: "15 / RECORDING INDEX", metaLabel: "房间编号", metaValue: appointmentRoom,
    });
    const start = progress.renewalStart;
    if (start === null) return header + `<section class="panel">
      <div class="panel-body"><p>关联续约回签后，可查阅这次赴约的开场记录。</p>
        <a class="inline-link" href="#renewal">返回训练房续约登记 →</a></div>
    </section>`;
    const verified = progress.openingVerified;
    return header + `<div class="layout">
      <div class="stack">
        <section class="panel" aria-labelledby="opening-preview-heading">
          <div class="section-head"><h2 id="opening-preview-heading">首分钟回放索引</h2>
            <span class="status ${verified ? "status-neutral" : "status-warn"}">${verified ? "未采集" : "预览已装载"}</span></div>
          <div class="panel-body">
            <dl class="facts">
              <dt>会话日期</dt><dd class="mono">${renewalPlan.date}</dd>
              <dt>索引时段</dt><dd class="mono">00:00–01:00 · ${renewalRange(start, start + 1)}</dd>
            </dl>
            ${verified ? `<p class="record-note">本时段未生成原声轨。需要核听旧副本时，可从留存回执打开。</p>
              <p><a class="inline-link" href="${route("retention", { section: "retention-result" })}">回听旧留存件 →</a></p>`
              : `<div class="track stack">
                <h3>恢复预览试听</h3>
                ${keptAudio("开场索引的恢复预览")}
              </div>`}
            <details class="transcript">
              <summary>查看原媒体装载回执</summary>
              <dl class="facts document-block">
                <dt>查询条件</dt><dd>房间号 ${appointmentRoom}</dd>
                <dt>装载资源</dt><dd><code>${keptArchive.id}</code></dd>
                <dt>实际预览时长</dt><dd>${keptDuration} 秒</dd>
              </dl>
            </details>
          </div>
        </section>
        <section class="panel" aria-labelledby="opening-sources-heading">
          <div class="section-head"><h2 id="opening-sources-heading">原始记录与留存回执</h2></div>
          <div class="panel-body stack">
            <details class="transcript">
              <summary>会话接入日志</summary>
              <ol>
                <li><time>${renewalTime(start - 2)}</time>陈序进入等候区。</li>
                <li><time>${renewalTime(start)}</time>闻舟开房，陈序连入。队员 2 人，旁听 0 人。</li>
              </ol>
            </details>
            <details class="transcript">
              <summary>录音器原始日志</summary>
              <ol>
                <li><time>${renewalTime(start)}</time>麦克风联机，录音器待机。</li>
                <li><time>${renewalTime(start + 1)}</time>首次启动录音。首段写入量 0 字节。</li>
              </ol>
            </details>
            <details class="transcript">
              <summary>旧共同留存件回执</summary>
              <dl class="facts document-block">
                <dt>留存件编号</dt><dd><code>${keptArchive.id}</code></dd>
                <dt>留存日期</dt><dd class="mono">${keptArchive.date}</dd>
                <dt>内容</dt><dd>两人共同选中的开场两句。</dd>
              </dl>
            </details>
          </div>
        </section>
        ${verified ? openingResult() : openingReview()}
      </div>
      <aside class="side-card">
        <h3>续约开场备忘</h3>
        <p>先进房试麦。第一分钟，别开录音。</p>
        <p class="record-note">索引先给每场会话预留首分钟。录音是否写入，以录音器的原始日志为准。</p>
        <p><a class="inline-link" href="${route("renewal", { section: "renewal-result" })}">查看续约回签 →</a></p>
      </aside>
    </div>`;
  }

  function closingLink(className) {
    const closed = progress.caseClosed;
    return `<a class="${className}" href="${route("closing", { section: closed ? "closing-result" : "" })}">${closed ? "回看结案回执" : "完成结案归档"} →</a>`;
  }

  function closingReview() {
    const options = '<option value="">选择归档位置</option>' + Object.entries(closingTargets)
      .map(([value, label]) => `<option value="${value}">${label}</option>`).join("");
    return `<section class="panel" aria-labelledby="closing-review-heading">
      <div class="section-head"><h2 id="closing-review-heading">末批移交清单</h2><span class="status status-warn">待核对</span></div>
      <div class="panel-body">
        <p>按已签的许可，为三项材料选择各自的归档位置。</p>
        <form class="archive-form closing-form" id="closing-review">
          ${closingRecords.map((record) => `<label>
            <strong>${record.title}</strong>
            <span class="small muted">${record.detail}</span>
            <select name="${record.id}" aria-label="${record.title}的归档位置" required>${options}</select>
          </label>`).join("")}
          <button class="button" type="submit">签退并完成归档</button>
        </form>
        <p class="feedback" id="closing-feedback" role="status" tabindex="-1"></p>
      </div>
    </section>`;
  }

  function closingResult() {
    const roomEnd = progress.renewalStart + renewalPlan.duration;
    return `<section class="panel chapter-end" id="closing-result" tabindex="-1" aria-labelledby="closing-result-heading">
      <div class="section-head"><h2 id="closing-result-heading">结案回执</h2><span class="status status-neutral">全案完结</span></div>
      <div class="panel-body">
        <blockquote class="quote"><small>纪念展展签定稿</small>${finalCaption}</blockquote>
        ${progress.seatStage === "summary" ? `<p class="record-note"><strong>展签附记</strong>　${seatCaption}</p>`
          : '<p class="record-note">赴约事实已随房间档案封存。</p>'}
        <div class="document-block">
          <h3>封套的两份回签</h3>
          <div class="stack">
            ${[
              { author: "陈序 · 回签", time: `${renewalPlan.date} ${renewalTime(roomEnd)}`, text: "下次我到了就敲两下。你听见了再开门。" },
              { author: "闻舟 · 第二个签收人", time: `${renewalPlan.date} ${renewalTime(roomEnd + 1)}`, text: "听得见。下次我还开。" },
            ].map(roomNote).join("")}
          </div>
        </div>
        <p class="conclusion">归档完成，校对人已签退。房间留给他们两个人。</p>
        <p class="small muted">终章《第二个签收人》完</p>
        <div class="document-block">
          <h3>结案回看</h3>
          <div class="actions">
            <a class="inline-link" href="${route("orders", { event: exhibitOrder.id, section: "correction" })}">查看展签定稿</a>
            <a class="inline-link" href="${route("retention", { section: "retention-result" })}">回听共同留存原声</a>
            <a class="inline-link" href="${route("opening", { section: "opening-result" })}">查看开场复核</a>
          </div>
        </div>
        <a class="button button-secondary" href="#start">返回游戏入口</a>
      </div>
    </section>`;
  }

  function closingPage() {
    const header = intro({
      title: "档案结案", summary: "复核最后一批材料的去向，签退本次档案校对。",
      mark: "16 / CASE CLOSURE", metaLabel: "案卷编号", metaValue: "LT / 1106",
    });
    if (!progress.openingVerified) return header + `<section class="panel">
      <div class="panel-body"><p>首分钟回放索引复核后，可查阅末批移交清单。</p>
        <a class="inline-link" href="#opening">返回续约开场档案 →</a></div>
    </section>`;
    return header + `<div class="layout">
      ${progress.caseClosed ? closingResult() : closingReview()}
      <aside class="side-card">
        <h3>归档授权凭据</h3>
        <p><a class="inline-link" href="${route("archive", { section: "archive-result" })}">C03 展签附件登记 →</a></p>
        <p><a class="inline-link" href="${route("screening", { section: "screening-result" })}">原声放映变更联签单 →</a></p>
        <p class="record-note">恢复批注　修复单随馆务日志入库，供下次恢复旧站时检查预览错链。</p>
      </aside>
    </div>`;
  }

  function resumeHref() {
    const checkpoints = [
      [progress.caseClosed, route("closing", { section: "closing-result" })],
      [progress.openingVerified, "#closing"],
      [progress.renewalStart !== null, "#opening"],
      [progress.handoffVerified, "#renewal"],
      [progress.screeningRebuilt, "#handoff"],
      [progress.excerptSaved, "#screening"],
      [progress.trainingAligned, "#retention"],
      [progress.appointmentMatched, "#training"],
      [seatingClosed(), "#appointments"],
      [progress.readbackVerified, "#seating"],
      [progress.dispatchStage === "filed", "#readback"],
      [progress.archiveStage === "filed", "#dispatch"],
      [progress.archiveStage === "located", route("archive", { section: "archive-result" })],
      [progress.correctedAt, "#archive"],
      [progress.reviewed, route("orders", { event: exhibitOrder.id, section: "correction" })],
    ];
    return checkpoints.find(([ready]) => ready)?.[1] || "#claim";
  }

  function startPage() {
    const target = resumeHref();
    let action = "继续调查";
    if (target === "#claim") action = "开始调查";
    if (progress.caseClosed) action = "回看结局";
    return `<section class="panel case-cover" aria-labelledby="case-title">
      <p class="eyebrow">临汀电竞馆 · 档案 LT / 1106</p>
      <h1 id="case-title">第二个签收人</h1>
      <p class="case-premise">闭馆前，一场双人表演赛临时取消。纪念展的展签说一位选手缺席，器材交接单上却多了一位签收人。</p>
      <p>从场馆旧站的失物认领查起。网页里的时间、编号和录音都是可以核对的线索。</p>
      <div class="actions">
        <a class="button" href="${target}">${action}</a>
        ${target === "#claim" ? "" : '<a class="inline-link" href="#claim">进入馆务首页</a>'}
      </div>
      <p class="small muted">进度保存在当前浏览器。录音附有文字稿。</p>
    </section>`;
  }

  const pages = {
    start: startPage,
    claim: claimPage, item: itemPage, orders: ordersPage, replay: replayPage,
    archive: archivePage, dispatch: dispatchPage, readback: readbackPage, board: boardPage, seating: seatingPage,
    appointments: appointmentsPage, training: trainingPage, retention: retentionPage, screening: screeningPage,
    handoff: handoffPage, renewal: renewalPage, opening: openingPage, closing: closingPage,
  };
  const titles = {
    start: "第二个签收人",
    claim: "失物认领", item: "登记详情", orders: "历史工单", replay: "回放查询",
    archive: "档案复核", dispatch: "机位投递记录", readback: "读取回执", board: "旧训练留言板", seating: "房间席位复核",
    appointments: "同名房间预约", training: "双轨训练录音", retention: "联签留存单", screening: "纪念展放映台账",
    handoff: "散场移交查询", renewal: "训练房续约登记", opening: "续约开场档案", closing: "档案结案",
  };

  function render(focusId) {
    view = currentView();
    clearTimeout(screeningTimer);
    for (const player of main.querySelectorAll("audio")) player.pause();
    main.innerHTML = pages[view.page](view.params);
    document.title = `${titles[view.page]} · 临汀电竞馆`;
    const activePage = {
      item: "claim", dispatch: "replay", readback: "replay", board: "replay", seating: "replay",
      appointments: "replay", training: "replay", retention: "replay", screening: "replay", handoff: "replay", renewal: "replay",
      opening: "replay", closing: "archive",
    }[view.page] || view.page;
    for (const link of document.querySelectorAll("[data-nav]")) {
      if (link.dataset.nav === "archive") link.hidden = !progress.correctedAt;
      const active = link.dataset.nav === activePage;
      if (active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    }
    const section = view.params.get("section");
    const linkedSection = [
      "correction", "handover", "archive-lookup", "archive-result", "restored-dispatch", "seat-exit",
      "appointment-records", "appointment-result", "training-result", "retention-result",
      "screening-result", "handoff-ledger", "handoff-result", "renewal-result", "opening-result", "closing-result",
    ].includes(section) ? section : "main";
    const target = document.getElementById(focusId || linkedSection) || main;
    target.focus({ preventScroll: true });
    if (target === main) window.scrollTo(0, 0);
    else target.scrollIntoView({ block: "start" });
  }

  main.addEventListener("click", (event) => {
    if (event.target.closest("#screening-preview")) {
      const projection = document.getElementById("screening-projection");
      const status = document.getElementById("screening-preview-status");
      clearTimeout(screeningTimer);
      projection.textContent = screeningSlot.caption;
      status.textContent = "正在放映 · 原声 0 秒";
      screeningTimer = setTimeout(() => {
        projection.textContent = "待机";
        status.textContent = `放映结束 · 画面 ${keptDuration} 秒 · 原声 0 秒`;
      }, keptDuration * 1000);
      return;
    }
    const seatView = event.target.closest("button[data-seat-view]");
    if (seatView) {
      for (const button of main.querySelectorAll("button[data-seat-view]")) {
        button.setAttribute("aria-pressed", String(button === seatView));
      }
      document.getElementById("seat-snapshot").innerHTML = seatSnapshot(seatSnapshots[seatView.dataset.seatView]);
      return;
    }
    const move = event.target.closest("button[data-dispatch-move]");
    if (move) {
      const { entry, dispatchMove } = move.dataset;
      const order = progress.dispatchOrder;
      const from = order.indexOf(entry);
      const to = from + Number(dispatchMove);
      if (from < 0 || to < 0 || to >= order.length || progress.dispatchStage) return;
      [order[from], order[to]] = [order[to], order[from]];
      saveProgress();
      document.getElementById("dispatch-list").outerHTML = dispatchList();
      document.getElementById("dispatch-feedback").textContent = "";
      document.getElementById("dispatch-change").textContent = `${dispatchEntries[entry].title}已移至第 ${to + 1} 项。`;
      const controls = main.querySelectorAll(`button[data-entry="${entry}"]:not([disabled])`);
      const next = Array.from(controls).find((control) => control.dataset.dispatchMove === dispatchMove) || controls[0];
      next?.focus();
      return;
    }
    const button = event.target.closest("button[data-track]");
    if (!button || button.getAttribute("aria-pressed") === "true") return;
    const track = button.dataset.track;
    const content = document.getElementById("track-content");
    content.querySelector("audio")?.pause();
    for (const version of main.querySelectorAll("[data-track]")) {
      version.setAttribute("aria-pressed", String(version === button));
    }
    if (track === "backup" && !progress.reviewed) {
      progress.reviewed = true;
      saveProgress();
    }
    content.innerHTML = trackContent(track);
  });

  main.addEventListener("input", (event) => {
    const control = event.target;
    if (control.id !== "training-shift") return;
    const shift = Number(control.value);
    const label = trainingShiftLabel(shift);
    control.setAttribute("aria-valuetext", label);
    document.getElementById("training-shift-label").textContent = label;
    document.getElementById("training-ruler").innerHTML = trainingRuler(shift);
  });

  main.addEventListener("change", (event) => {
    const renewalForm = event.target.closest("#renewal-review");
    if (renewalForm) {
      const start = Number(event.target.value);
      const end = start + renewalPlan.duration;
      document.getElementById("renewal-selection").textContent = `拟邀约时段　${renewalRange(start, end)}`;
      document.getElementById("renewal-feedback").textContent = "";
      for (const block of renewalForm.querySelectorAll("[data-renewal-minute]")) {
        const minute = Number(block.dataset.renewalMinute);
        block.classList.toggle("renewal-selected", minute >= start && minute < end);
      }
      return;
    }
    const form = event.target.closest("#retention-review");
    if (!form) return;
    const data = new FormData(form);
    const start = data.has("start") ? Number(data.get("start")) : null;
    const end = data.has("end") ? Number(data.get("end")) : null;
    const startLabel = start === null ? "待选" : excerptTime(start);
    const endLabel = end === null ? "待选" : excerptTime(end);
    const hasRange = start !== null && end !== null && start < end;
    document.getElementById("retention-range-label").textContent = `起点 ${startLabel}　终点 ${endLabel}`;
    for (const row of form.querySelectorAll("[data-excerpt-time]")) {
      const time = Number(row.dataset.excerptTime);
      row.classList.toggle("retention-in-range", hasRange && time >= start && time <= end);
    }
  });

  main.addEventListener("submit", (event) => {
    const form = event.target;
    event.preventDefault();
    const data = new FormData(form);
    if (form.id === "correction-form") {
      const feedback = document.getElementById("correction-feedback");
      if (!progress.reviewed) {
        feedback.textContent = "请先核阅录音盒的机内备份，再提交勘误。";
      } else if (data.get("caption") !== "side-door") {
        feedback.textContent = "这条展签与档案不符。请分别核对到场地点和表演赛是否举行。";
      } else if (!progress.correctedAt) {
        progress.correctedAt = Date.now();
        saveProgress();
        render("chapter-end");
      }
      return;
    }
    if (form.id === "archive-filing") {
      const selected = data.getAll("attachment");
      const feedback = document.getElementById("archive-feedback");
      if (selected.includes("conversation")) {
        feedback.textContent = "22:16 的谈话仍在封存范围内。请按当事人的复核意见选择附件。";
      } else if (selected.includes("index")) {
        feedback.textContent = "第 03 条是后来入库的索引。展签需要能证明当晚到场的原始记录。";
      } else if (!selected.includes("receipt") || !selected.includes("arrival")) {
        feedback.textContent = "请同时选中原始签收单和到场核对片段。";
      } else if (progress.archiveStage !== "filed") {
        progress.archiveStage = "filed";
        saveProgress();
        render("archive-complete");
      }
      return;
    }
    if (form.id === "dispatch-timeline") {
      if (progress.dispatchStage) return;
      if (!dispatchChronology.every((entry, index) => entry === progress.dispatchOrder[index])) {
        document.getElementById("dispatch-feedback").textContent = "顺序不符。先按同一时刻的读数算出时差，再换算跨过零点的那条留言。";
      } else {
        progress.dispatchStage = "restored";
        saveProgress();
        render("restored-dispatch");
      }
      return;
    }
    if (form.id === "dispatch-filing") {
      if (progress.dispatchStage !== "restored") return;
      progress.dispatchStage = "filed";
      saveProgress();
      render("dispatch-complete");
      return;
    }
    if (form.id === "readback-match") {
      if (progress.dispatchStage !== "filed" || view.page !== "board") return;
      const topic = boardTopics.find((entry) => entry.id === view.params.get("thread"));
      if (!topic || !matchesReadback(topic)) {
        document.getElementById("readback-feedback").textContent = "这份引用与读取回执对不上。请核对原始索引和引用快照号。";
      } else if (!progress.readbackVerified) {
        progress.readbackVerified = true;
        saveProgress();
        render("restored-reply");
      }
      return;
    }
    if (form.id === "seat-review") {
      if (!progress.readbackVerified || progress.seatStage) return;
      const feedback = document.getElementById("seat-review-feedback");
      if (data.get("arrival") !== "connected") {
        feedback.textContent = "请找出同时记下两人连入时间的记录。预约簿保留的是座位。";
      } else if (data.get("observer") !== "restored") {
        feedback.textContent = "请找出带有校对人身份和旁听席的那份记录。";
      } else {
        progress.seatStage = "verified";
        saveProgress();
        render("seat-result");
      }
      return;
    }
    if (form.id === "seat-filing") {
      const ending = event.submitter?.value;
      if (progress.seatStage && Object.hasOwn(seatEndings, ending)) {
        progress.seatStage = ending;
        saveProgress();
        render("seat-exit");
      }
      return;
    }
    if (form.id === "appointment-calendar") {
      if (!seatingClosed() || progress.appointmentMatched) return;
      const room = appointmentDays[appointmentDay(view.params)].rooms.find((entry) => entry.id === event.submitter?.value);
      if (!room) return;
      if (room.id === appointmentRoom) {
        progress.appointmentMatched = true;
        saveProgress();
        render("appointment-result");
      } else {
        const feedback = document.getElementById("appointment-feedback");
        feedback.textContent = room.hint;
        feedback.focus();
      }
      return;
    }
    if (form.id === "training-review") {
      if (!progress.appointmentMatched || progress.trainingAligned) return;
      const feedback = document.getElementById("training-feedback");
      if (Number(data.get("shift")) !== trainingOffset) {
        feedback.textContent = "两声敲击还没有对齐。先让两条时间线上的 ◆ 落在同一个时刻。";
      } else if (data.get("first") !== trainingSequence()[0].id) {
        feedback.textContent = "敲击已经对齐。再比较两轨调整后的发声时间。";
      } else {
        progress.trainingAligned = true;
        saveProgress();
        render("training-result");
      }
      return;
    }
    if (form.id === "retention-review") {
      if (!progress.trainingAligned || progress.excerptSaved) return;
      const feedback = document.getElementById("retention-feedback");
      const start = Number(data.get("start"));
      const end = Number(data.get("end"));
      if (end <= start) {
        feedback.textContent = "终点要排在起点之后。再对照两句的先后位置。";
      } else if (start !== keptExcerpt.start) {
        feedback.textContent = "把起点放在陈序开口的标记上，留全他的第一句。";
      } else if (end !== keptExcerpt.end) {
        feedback.textContent = "把终点放在闻舟收声的标记上，让两句完整说完。";
      } else {
        progress.excerptSaved = true;
        saveProgress();
        render("retention-result");
      }
      return;
    }
    if (form.id === "screening-review") {
      if (!progress.excerptSaved || progress.screeningRebuilt) return;
      const feedback = document.getElementById("screening-feedback");
      const receipt = screeningReceipts.find((entry) => comparable(entry.id) === comparable(data.get("receipt")));
      if (!receipt) {
        feedback.textContent = "未找到这份终端回执。请核对展开记录时显示的编号。";
      } else if (receipt.time !== screeningSlot.time) {
        feedback.textContent = "这份回执早于正场开场。请核对排期里的开场时间。";
      } else if (receipt.terminal !== screeningSlot.terminal) {
        feedback.textContent = "开场时间对得上。请再核对排期指定的展厅终端。";
      } else if (data.has("image") !== (receipt.imageSeconds > 0)) {
        feedback.textContent = "请核对正场回执里展签画面的实际输出时长。";
      } else if (data.has("sound") !== (receipt.soundSeconds > 0)) {
        feedback.textContent = "请核对正场回执里扬声器的输出时长。";
      } else {
        progress.screeningRebuilt = true;
        saveProgress();
        render("screening-result");
      }
      return;
    }
    if (form.id === "handoff-review") {
      if (!progress.screeningRebuilt || progress.handoffVerified) return;
      const cabinet = handoffCabinets[form.dataset.cabinet];
      const receipt = cabinet.receipts.find((entry) => entry.id === event.submitter?.value);
      if (!receipt) return;
      const feedback = document.getElementById("handoff-feedback");
      if (cabinet.label !== handoffSlip.label) {
        feedback.textContent = `这只柜的地点签是「${cabinet.label}」。再核对归还联的地点栏。`;
      } else if (receipt.time !== handoffSlip.time || receipt.action !== "归还") {
        feedback.textContent = "请核对散场归还的时间。借出的记录也会写入柜体流水。";
      } else if (receipt.seal !== handoffSlip.seal) {
        feedback.textContent = "归还时间对得上。请再比对归还联上的封套编号。";
      } else {
        progress.handoffVerified = true;
        saveProgress();
        go("handoff", { cabinet: form.dataset.cabinet, section: "handoff-result" });
        return;
      }
      feedback.focus();
      return;
    }
    if (form.id === "renewal-review") {
      if (!progress.handoffVerified || progress.renewalStart !== null) return;
      const start = Number(data.get("start"));
      const conflict = renewalConflict(start);
      if (conflict) {
        const feedback = document.getElementById("renewal-feedback");
        feedback.textContent = conflict;
        feedback.focus();
      } else {
        progress.renewalStart = start;
        saveProgress();
        go("renewal", { section: "renewal-result" });
      }
      return;
    }
    if (form.id === "opening-review") {
      if (progress.renewalStart === null || progress.openingVerified) return;
      const feedback = document.getElementById("opening-feedback");
      if (data.get("track") !== "none") {
        feedback.textContent = "对照录音器第一次启动的时刻和首段写入量，判断第一分钟有没有生成声轨。";
      } else if (data.get("source") !== "kept") {
        feedback.textContent = "比较媒体装载回执与旧留存件回执上的资源编号。";
      } else {
        progress.openingVerified = true;
        saveProgress();
        go("opening", { section: "opening-result" });
        return;
      }
      feedback.focus();
      return;
    }
    if (form.id === "closing-review") {
      if (!progress.openingVerified || progress.caseClosed) return;
      const wrong = closingRecords.find((record) => data.get(record.id) !== record.target);
      if (wrong) {
        const feedback = document.getElementById("closing-feedback");
        feedback.textContent = wrong.hint;
        feedback.focus();
      } else {
        progress.caseClosed = true;
        saveProgress();
        go("closing", { section: "closing-result" });
      }
      return;
    }
    const page = form.dataset.search;
    if (page === "claim") go("claim", { q: data.get("q").trim(), category: view.params.get("category") });
    if (page === "orders") go("orders", { event: data.get("event").trim() });
    if (page === "replay") go("replay", { device: data.get("device").trim() });
    if (page === "board") go("board", { q: data.get("q").trim(), mode: view.params.get("mode") });
    if (page === "archive") {
      const receipt = data.get("receipt").trim();
      const device = data.get("device").trim();
      const found = matchesArchive(receipt, device);
      if (found && !progress.archiveStage) {
        progress.archiveStage = "located";
        saveProgress();
      }
      go("archive", { receipt, device, section: found ? "archive-result" : "archive-lookup" });
    }
  });

  document.querySelector(".skip").addEventListener("click", (event) => {
    event.preventDefault();
    main.focus();
  });
  document.getElementById("reset-progress").addEventListener("click", (event) => {
    progress = freshProgress();
    saveProgress();
    event.target.closest("details").open = false;
    go("claim");
  });

  window.addEventListener("hashchange", () => render());
  render();
})();
