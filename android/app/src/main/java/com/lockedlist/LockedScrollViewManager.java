package com.lockedlist;


import android.graphics.Color;
import android.support.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.Spacing;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.annotations.ReactPropGroup;
import com.facebook.react.views.scroll.FpsListener;
import com.facebook.react.views.scroll.ReactScrollView;
import com.facebook.react.views.scroll.ReactScrollViewCommandHelper;
import com.facebook.react.views.scroll.ReactScrollViewHelper;
import com.facebook.react.views.scroll.ReactScrollViewManager;
import com.facebook.yoga.YogaConstants;

import java.util.HashMap;
import java.util.Map;

public class LockedScrollViewManager extends ReactScrollViewManager {

  protected static final String REACT_CLASS = "RCTLockedScroll";

  @Override
  public LockedScrollView createViewInstance(ThemedReactContext context) {
    return new LockedScrollView(context);
  }

  @Override
  public String getName() {
    return REACT_CLASS;
  }

   @ReactProp(name = "isLocked", defaultBoolean = true)
   public void setIsLocked(LockedScrollView view, boolean value) {
     view.setIsLocked(value);
   }

   @ReactProp(name = "shouldScroll", defaultBoolean = true)
   public void setShouldScroll(LockedScrollView view, boolean value) {
     view.setShouldScroll(value);
   }
}

