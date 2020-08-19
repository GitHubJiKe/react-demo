import { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Modal } from "antd";

const basePermissions = ["1", "2", "3", "4"];

export const hasPermissions = (permissions: string[]) => {
  let res = true;
  const len = permissions.length;
  for (let index = 0; index < len; index++) {
    const permission = permissions[index];
    if (!basePermissions.includes(permission)) {
      res = false;
      break;
    }
  }
  return res;
};

export function usePermissions(permissions: string[], redirectPath?: string) {
  const history = useHistory();
  const hasPermission = hasPermissions(permissions);
  let modalRef = useRef<any>(null);
  useEffect(() => {
    if (!hasPermission) {
      const onConfirm = (close?: Function) => {
        close && close();
        history.replace(redirectPath || "/");
      };
      modalRef.current = Modal.warning({
        title: "Sorry",
        content: "Sorry, you have no permission to access this page",
        onOk: onConfirm,
      });
    }
    return () => {
      modalRef.current &&
        modalRef.current.destory &&
        modalRef.current.destory();
    };
  }, []);
  return hasPermission;
}

export default {
  hasPermissions,
  usePermissions,
};
