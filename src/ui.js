'use strict';
const { Box, Text } = require('ink');
const React = require("react");
const SelectInput = require('ink-select-input').default;
const open = require('open');

const { introduce, userItems } = require("./const");

const menuItems = [
  {
    label: "---------",
  },
  {
    label: "Quit",
    action() {
      process.exit();
    },
  }
];

const mergeArray = (main, sub) => {
  return main.concat(sub);
}

const handleSelect = item => {
  if (item.url) {
    open(item.url);
  }

  if (item.action) {
    item.action();
  }
};

const createItems = items => {
  for (const item of items) {
    item.key = item.url || item.label;
  }

  return items;
};

const mergedItems = mergeArray(userItems, menuItems);

const items = createItems(mergedItems);

module.exports = () => (
  <Box>

    <Box flexDirection="column">
      <Box marginBottom={1}>
        <Text>{introduce}</Text>
      </Box>
      <SelectInput items={items} onSelect={handleSelect} />
    </Box>
  </Box>
);
