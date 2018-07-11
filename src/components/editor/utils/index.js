//测试获取该页重点笔记
// 传入编辑器实例，返回该页的重点笔记raw
export const getImportantnce = editorInstance => {
  const content = teditorInstance.getContent("raw");

  const tc = JSON.parse(JSON.stringify(content));
  // 获取含有important的区间
  // todo 把那一段的样式也保留下。。有点麻烦好像
  const importantSum = [];
  tc.blocks.forEach(block => {
    const temp = [];
    block.inlineStyleRanges.forEach(inlineStyle => {
      // 一个区块的重点笔记在一个div里面

      if (inlineStyle.style === "COLOR-C0392B") {
        temp.push(
          `<span>${block.text.substr(
            inlineStyle.offset,
            inlineStyle.length
          )}</span>`
        );
      }
    });
    importantSum.push(temp.join(" "));
  });
  return importantSum;
};
