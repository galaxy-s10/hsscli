import { columnsConfig } from "./columns.config";

import { IForm } from "@/components/Base/Form";
import { useOrder } from "@/hooks/use-order";

export const searchFormConfig: IForm = {
  gridSpan: 8,
  labelPlacement: "left",
  formStyle: {
    justifyContent: "center",
  },
  formItems: [
    {
      field: "id",
      type: "input",
      label: "id",
      placeholder: "请输入id",
    },
    {
      field: "keyWord",
      type: "input",
      label: "关键字",
      placeholder: "作品名称/简介/线上地址",
    },
    ...useOrder(columnsConfig),
  ],
};
