//======================================================
// Object : EzValidation
// Group : Object
// Author : 정민석(whitn86@gmail.com)
//======================================================
/*
 * confirmSave : 저장전에 유효성 검사를 실행한다 
 * param : fir : validator object 호출
 * param : sec : 
*/
const confirmSave = (array,sec)=>{
    array.every((el)=>{el })
}


(_pEzMassProduction.confirmSave = function () {
    var e = Array.from(arguments),
        t = [],
        r = nexacro.getApplication();
    return e.every(function (e) {
        if ("undefined" != typeof EzValidator && e instanceof EzValidator) {
            if (!(n = e.check()).valid) return r.pop.alert(n.msg) && !1;
        } else if (void 0 !== nexacro.EzValidation && e instanceof nexacro.EzValidation) {
            var n = e.check();
            if (!n.valid) return r.pop.alert(n.msg) && !1;
        } else if (e instanceof nexacro.Dataset) return t.push(e), !0;
        return !0;
    })
        ? this.checkUpdate(t)
            ? r.pop.confirm({ id: "comp_cansave", msg: this._getMessage("CAN_SAVE") }).then(function (e) {
                  return Promise.resolve(e && !("object" == typeof e && !e.data));
              })
            : r.pop.alert(this._getMessage("NO_SAVE_TARGET")) && Promise.resolve(!1)
        : Promise.resolve(!1);
}),



if (((this._requiredColNms = null), this._canCheck())) {
    var t = this._idxColNm,
        i = this._idxOption,
        e = (this._idxValue, this._idxMsg, this);
    this._requiredColNms = this._viewRecords.reduce(function (a, n, s, r) {
        var l = e.__getParsedRow(n),
            o = l[i],
            _ = l[t];
        return "required" !== o || $util.isNull(_) || a.push(_), a;
    }, []);



if (!nexacro.EzValidation) {
  nexacro.EzValidation = function (t, i) {
      nexacro.NormalDataset.call(this, t, i),
          (this.form = i),
          (this._bindMap = null),
          (this._cellBindMap = null),
          (this._requiredColNms = null),
          (this._idxColNm = -1),
          (this._idxOption = -1),
          (this._idxValue = -1),
          (this._idxMsg = -1),
          (this._formLoaded = !1);
  };
  var _pEzValidation = (nexacro.EzValidation.prototype = nexacro._createPrototype(nexacro.NormalDataset, nexacro.EzValidation));
  (nexacro.EzValidation.LOG_KEY = "[EzValidation]"),
      (_pEzValidation._exprReg = new RegExp("^s*expr:(.*)")),
      (_pEzValidation._fnReg = new RegExp("^s*fn:(.*)")),
      (_pEzValidation.baseXML =
          '<ColumnInfo><Column id="COL_NM" type="STRING" size="256"/><Column id="OPTION" type="STRING" size="256"/><Column id="VALUE" type="STRING" size="256"/><Column id="MSG" type="STRING" size="256"/></ColumnInfo>'),
      (_pEzValidation._valid_fn = {
          required: function (t, i) {
              return !(i && $util.isNull(t));
          },
          min: function (t, i) {
              return isNaN(t) || isNaN(i) || 1 * t >= 1 * i;
          },
          max: function (t, i) {
              return isNaN(t) || isNaN(i) || 1 * t <= 1 * i;
          },
          minDate: function (t, i) {
              return (t = ((t || "") + "").left(8)), (i = ((i || "") + "").left(8)), !t.isDate() || !i.isDate() || t >= i;
          },
          maxDate: function (t, i) {
              return (t = ((t || "") + "").left(8)), (i = ((i || "") + "").left(8)), !t.isDate() || !i.isDate() || t <= i;
          },
          minLength: function (t, i) {
              return $util.isNull(t) || isNaN(i) || (t + "").trim().length >= i;
          },
          maxLength: function (t, i) {
              return $util.isNull(t) || isNaN(i) || (t + "").trim().length <= i;
          },
          minByte: function (t, i) {
              return $util.isNull(t) || isNaN(i) || (t + "").trim().byte >= i;
          },
          maxByte: function (t, i) {
              return $util.isNull(t) || isNaN(i) || (t + "").trim().byte <= i;
          },
          jumin: function (t, i) {
              return !i || $util.isNull(t) || t.num().isJumin();
          },
          foreign: function (t, i) {
              return !i || $util.isNull(t) || t.num().isForeign();
          },
          biznum: function (t, i) {
              return !i || $util.isNull(t) || t.num().isBiznum();
          },
          corpnum: function (t, i) {
              return !i || $util.isNull(t) || t.num().isCorpnum();
          },
          mobile: function (t, i) {
              return !i || $util.isNull(t) || t.num().isMobile();
          },
          tel: function (t, i) {
              return !i || $util.isNull(t) || t.num().isTel();
          },
          email: function (t, i) {
              return !i || $util.isNull(t) || t.isEmail();
          },
      }),
      (_pEzValidation._key_validInfo = "_ez_validation_validInfo"),
      (_pEzValidation.on_created = function () {
          nexacro.NormalDataset.prototype.on_created.call(this), this._straightenIdxInfos(), this._makeRequiredColNms(), this.form.addEventHandler("onload", this._formOnloadEvt, this);
      }),
      (_pEzValidation.destroy = function () {
          nexacro.NormalDataset.prototype.destroy.call(this),
              this.form.removeEventHandler("onload", this._formOnloadEvt, this),
              this._on_umount_target(),
              (this._requiredColNms = null),
              (this._targetGrid = null),
              (this._targetDataset = null);
      }),
      (_pEzValidation.target = ""),
      (_pEzValidation._targetGrid = ""),
      (_pEzValidation._targetDataset = ""),
      (_pEzValidation.set_target = function (t) {
          "string" != typeof t ? this.setTarget(t) : (this.target != t || (this.target && !this._targetDataset)) && this._setTargetStr(t);
      }),
      (_pEzValidation.setTarget = function (t) {
          this._on_umount_target(),
              t instanceof nexacro.Grid
                  ? ((this._targetGrid = t), (this._targetDataset = t.getBindDataset()), (this.target = t.fullPath))
                  : t instanceof nexacro.Dataset
                  ? ((this._targetGrid = null), (this._targetDataset = t), (this.target = t.name))
                  : ((this.target = ""), (this._targetGrid = null), (this._targetDataset = null)),
              this._on_apply_target();
      }),
      (_pEzValidation._setTargetStr = function (t) {
          if (((this.target = t), this._formLoaded)) {
              var i = this._findObjectByPath(t);
              this._on_umount_target(),
                  i instanceof nexacro.Grid
                      ? ((this._targetGrid = i), (this._targetDataset = i.getBindDataset()))
                      : i instanceof nexacro.Dataset
                      ? ((this._targetGrid = null), (this._targetDataset = i))
                      : ((this._targetGrid = null), (this._targetDataset = null)),
                  this._on_apply_target();
          }
      }),
      (_pEzValidation._on_umount_target = function () {
          var t = this._targetDataset;
          t && (t.removeEventHandler("oncolumnchanged", this._onTargetColumnChanged, this), t.removeEventHandler("onrowsetchanged", this._onTargetRowsetChanged, this)),
              this.unMarkingComps(),
              this.unMarkingCells(),
              (this._bindMap = null),
              (this._cellBindMap = null);
      }),
      (_pEzValidation._on_apply_target = function () {
          this._makeBindMap(), this._makeCellBindMap(), this.markingComps(), this.markingCells();
          var t = this._targetDataset;
          t && (t.addEventHandler("oncolumnchanged", this._onTargetColumnChanged, this), t.addEventHandler("onrowsetchanged", this._onTargetRowsetChanged, this));
      }),
      (_pEzValidation.findAuto = !0),
      (_pEzValidation.set_findAuto = function (t) {
          this.findAuto = nexacro._toBoolean(t);
      }),
      (_pEzValidation.requiredClass = "essential"),
      (_pEzValidation.set_requiredClass = function (t) {
          t !== this.requiredClass && ((this.requiredClass = t), this._on_apply_requiredClass());
      }),
      (_pEzValidation._on_apply_requiredClass = function () {
          this.markingComps();
      }),
      (_pEzValidation.cellRequiredClass = "CellEssential"),
      (_pEzValidation.set_cellRequiredClass = function (t) {
          t !== this.cellRequiredClass && ((this.cellRequiredClass = t), this._on_apply_cellRequiredClass());
      }),
      (_pEzValidation._on_apply_cellRequiredClass = function () {
          this.markingCells();
      }),
      (_pEzValidation.cellBlinkTime = 3e3),
      (_pEzValidation.set_cellBlinkTime = function (t) {
          t.isNaN() && (t = 3e3), (this.cellBlinkTime = t);
      }),
      (_pEzValidation.cellBlinkCount = 5),
      (_pEzValidation.set_cellBlinkCount = function (t) {
          t.isNaN() && (t = 5), (this.cellBlinkCount = t);
      }),
      (_pEzValidation.rebuild = function () {
          this._straightenIdxInfos(), this._makeRequiredColNms(), this._on_umount_target(), this._on_apply_target();
      }),
      (_pEzValidation._straightenIdxInfos = function () {
          (this._idxColNm = -1), (this._idxOption = -1), (this._idxValue = -1), (this._idxMsg = -1);
          var t = this.colinfos;
          t && ((this._idxColNm = t.indexOf("COL_NM")), (this._idxOption = t.indexOf("OPTION")), (this._idxValue = t.indexOf("VALUE")), (this._idxMsg = t.indexOf("MSG")));
      }),
      (_pEzValidation._canCheck = function () {
          return !!this._targetDataset && -1 != this._idxColNm && -1 != this._idxOption && -1 != this._idxValue && -1 != this._idxMsg && !!this._viewRecords && !!this.rowcount;
      }),
      (_pEzValidation._makeBindMap = function () {
          this._bindMap = null;
          var t = this._targetDataset,
              i = this.form;
          i &&
              i.binds &&
              (this._bindMap = Array.from(i.binds).reduce(function (i, e, a, n) {
                  if (e._dataset !== t) return i;
                  var s = e.columnid;
                  return i[s] || (i[s] = []), e._comp && i[s].push(e._comp), i;
              }, {}));
      }),
      (_pEzValidation._makeCellBindMap = function () {
          this._cellBindMap = null;
          var t = this._targetGrid;
          if (t && t._curFormat) {
              var i = t._curFormat._bodycells.reduce(function (t, i, e, a) {
                  if (!t[i._col]) {
                      var n = i.text._bindexpr;
                      n && (t[i._col] = n);
                  }
                  return t;
              }, {});
              this._cellBindMap = t._curFormat._headcells.reduce(function (t, e, a, n) {
                  return (t[i[e._col]] = e._cellidx), t;
              }, {});
          }
      }),
      (_pEzValidation._makeRequiredColNms = function () {
          if (((this._requiredColNms = null), this._canCheck())) {
              var t = this._idxColNm,
                  i = this._idxOption,
                  e = (this._idxValue, this._idxMsg, this);
              this._requiredColNms = this._viewRecords.reduce(function (a, n, s, r) {
                  var l = e.__getParsedRow(n),
                      o = l[i],
                      _ = l[t];
                  return "required" !== o || $util.isNull(_) || a.push(_), a;
              }, []);
          }
      }),
      (_pEzValidation.markingComps = function () {
          this._bindMap || this._makeBindMap(),
              this._bindMap &&
                  (this._requiredColNms || this._makeRequiredColNms(),
                  this._requiredColNms &&
                      this._requiredColNms.map(function (t) {
                          (this._bindMap[t] || []).map(function (t) {
                              t.set_cssclass(this.requiredClass);
                          }, this);
                      }, this));
      }),
      (_pEzValidation.unMarkingComps = function () {
          this._requiredColNms &&
              this._requiredColNms.map(function (t) {
                  (this._bindMap[t] || []).map(function (t) {
                      t.set_cssclass("");
                  });
              }, this);
      }),
      (_pEzValidation.markingCells = function () {
          var t = this._targetGrid;
          t &&
              (this._cellBindMap || this._makeCellBindMap(),
              this._cellBindMap &&
                  (this._requiredColNms || this._makeRequiredColNms(),
                  this._requiredColNms &&
                      this._requiredColNms.map(function (i) {
                          var e = this._cellBindMap[i];
                          t.setCellProperty("head", e, "cssclass", this.cellRequiredClass);
                      }, this)));
      }),
      (_pEzValidation.unMarkingCells = function () {
          var t = this._targetGrid;
          t &&
              this.requiredColNms &&
              this.requiredColNms.map(function (i) {
                  var e = this._cellBindMap[i];
                  t.setCellProperty("head", e, "cssclass", "");
              }, this);
      }),
      (_pEzValidation.getRowValidInfo = function (t) {
          this._sortValidationOpitions();
          var i = this._targetDataset;
          if (!i) return { valid: !0 };
          var e = i._viewRecords;
          if (!e) return { valid: !0 };
          var a = e[t];
          if (!a) return { valid: !0 };
          return (a[this._key_validInfo] = this._getRowValidInfo(t));
      }),
      (_pEzValidation._getRowValidInfo = function (t) {
          var i = { valid: !0, row: t, colNm: null, rsn: null, value: null, msg: null };
          if (!this._canCheck()) return i;
          var e = this._idxColNm,
              a = this._idxOption,
              n = this._idxValue,
              s = this._idxMsg,
              r = this._targetDataset;
          return (
              this._viewRecords.every(function (l) {
                  var o = this.__getParsedRow(l),
                      _ = o[e],
                      d = o[a],
                      u = o[n],
                      h = o[s],
                      c = r.getColumn(t, _);
                  u = this._decodeItem(u, t, [r, t, _]);
                  var f = this._valid_fn.hasOwnProperty(d) ? this._valid_fn[d](c, u) : nexacro._toBoolean(u);
                  return f || ((i.valid = !1), (i.row = t), (i.colNm = _), (i.rsn = d), (i.value = u), (i.msg = this._decodeItem(h, t, [r, t, _, d, u]))), f;
              }, this),
              i
          );
      }),
      (_pEzValidation.check = function (t) {
          var i = { valid: !0 },
              e = this._targetDataset;
          if (!e) return i;
          var a = e._viewRecords;
          if (!a) return i;
          t && this._sortValidationOpitions();
          var n = null,
              s = Array.from(a).every(function (i, e) {
                  return t && (i[this._key_validInfo] = this._getRowValidInfo(e)), !(n = i[this._key_validInfo]) || n.valid;
              }, this);
          if (!s && this.findAuto) {
              var r = n.row,
                  l = n.colNm;
              if ((e.set_rowposition(r), this._bindMap && this._bindMap[l])) {
                  var o = this._bindMap[l][0];
                  o && o.setFocus();
              }
              var _ = this._targetGrid;
              if (_ && this.cellBlinkTime && this.cellBlinkCount) {
                  var d = _.getBindCellIndex("body", l);
                  _.selectCell(r, d), _.blinkCell(r, l, this.cellBlinkTime, this.cellBlinkCount);
              }
          }
          return s ? i : n;
      }),
      (_pEzValidation._onTargetColumnChanged = function (t, i) {
          t._viewRecords[i.row][this._key_validInfo] = this.getRowValidInfo(i.row);
      }),
      (_pEzValidation._onTargetRowsetChanged = function (t, i) {
          switch (i.reason) {
              case Dataset.REASON_APPEND:
                  ~i.row && (t._viewRecords[i.row][this._key_validInfo] = this.getRowValidInfo(i.row));
                  break;
              case Dataset.REASON_MERGE:
                  var e = t._viewRecords;
                  Array.from(e).map(function (t, i) {
                      t[this._key_validInfo] = this.getRowValidInfo(i);
                  }, this);
          }
      }),
      (_pEzValidation._formOnloadEvt = function () {
          (this._formLoaded = !0), !this._targetDataset && this.target && this._setTargetStr(this.target);
      }),
      (_pEzValidation._findObjectByPath = function (t) {
          if (!t || "string" != typeof t) return null;
          var i = null;
          try {
              i = t.split(".").reduce(function (t, i, e, a) {
                  return t[i];
              }, this.form);
          } catch (i) {
              $logger.warn(nexacro.EzValidation.LOG_KEY, this.id, "_findObjectByPath", "해당 path의 Object를 찾을 수 없습니다", t);
          }
          return i;
      }),
      (_pEzValidation._decodeItem = function (t, i, e) {
          if ("string" == typeof t)
              if (this._exprReg.test(t)) {
                  var a = t.replace(this._exprReg, "$1");
                  t = $util.testExpr(this._targetDataset, i, a);
              } else if (this._fnReg.test(t)) {
                  var n = t.replace(this._fnReg, "$1");
                  t = this.form[n];
              }
          return t instanceof Function && (t = t.apply(this.form, e || [])), t;
      }),
      (_pEzValidation._sortValidationOpitions = function () {
          var t = this._targetDataset.colinfos,
              i = this,
              e = this._idxColNm;
          this._viewRecords.sort(function (a, n) {
              var s = i.__getParsedRow(a)[e],
                  r = i.__getParsedRow(n)[e];
              return t.indexOf(s) - t.indexOf(r);
          });
      }),
      delete _pEzValidation;
}
