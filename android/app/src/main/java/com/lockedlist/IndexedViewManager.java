package com.lockedlist;

import android.view.View;

import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.views.view.ReactViewGroup;
import com.facebook.react.views.view.ReactViewManager;

import javax.annotation.Nullable;

@ReactModule(name = IndexedViewManager.REACT_CLASS)
public class IndexedViewManager extends ReactViewManager {
    protected static final String REACT_CLASS = "RCTIndexedView";

    @Override
    public ReactViewGroup createViewInstance(ThemedReactContext context) {
        return new ReactViewGroup(context);
    }

    @ReactProp(name = "index")
    public void setIndex(ReactViewGroup view, @Nullable String index) {
        view.setTag(index);
    }
}
