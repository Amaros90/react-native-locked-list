package com.lockedlist;


import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.views.scroll.ReactScrollViewManager;

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

   @ReactProp(name = "enabled", defaultBoolean = true)
   public void setEnabled(LockedScrollView view, boolean value) {
     view.setEnabled(value);
   }

    @ReactProp(name = "shouldScroll")
    public void setShouldScroll(LockedScrollView view, boolean value) {
        view.setShouldScroll(value);
    }

    //
}

