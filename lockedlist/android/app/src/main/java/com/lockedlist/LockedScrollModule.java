package com.lockedlist;


import android.graphics.Color;
import android.support.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.Spacing;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.annotations.ReactPropGroup;
import com.facebook.react.views.scroll.FpsListener;
import com.facebook.react.views.scroll.ReactScrollViewCommandHelper;
import com.facebook.react.views.scroll.ReactScrollViewHelper;
import com.facebook.react.views.scroll.ReactScrollViewManager;
import com.facebook.yoga.YogaConstants;

import java.util.HashMap;
import java.util.Map;

@ReactModule(name = LockedScrollModule.REACT_CLASS)
public class LockedScrollModule extends ReactScrollViewManager {

  private static final String SHOULD_SCROLL_KEY = "SHOULDSCROLL";
  private static final String IS_LOCKED_KEY = "ISLOCKED";

  protected static final String REACT_CLASS = "LockedScrollAndroid";

  private @Nullable FpsListener mFpsListener = null;

  public LockedScrollModule() {
    this(null);
  }

  public LockedScrollModule(@Nullable FpsListener fpsListener) {
    mFpsListener = fpsListener;
  }

  @Override
  public String getName() {
    return REACT_CLASS;
  }

  @Override
  public Map<String, Object> getConstants() {
    final Map<String, Object> constants = new HashMap<>();
    constants.put(SHOULD_SCROLL_KEY, LockedScrollView.ShouldScroll);
    constants.put(IS_LOCKED_KEY, LockedScrollView.IsLocked);
    return constants;
  }

  @ReactProp(name = "isLocked", defaultBoolean = true)
  public void setIsLocked(LockedScrollView view, boolean value) {
    view.IsLocked = value;
  }

  @ReactProp(name = "shouldScroll", defaultBoolean = true)
  public void setShouldScroll(LockedScrollView view, boolean value) {
    view.ShouldScroll = value;
  }
}

