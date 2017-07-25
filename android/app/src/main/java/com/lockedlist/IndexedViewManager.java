package com.lockedlist;

import android.content.Context;
import android.view.View;

import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.views.view.ReactViewGroup;
import com.facebook.react.views.view.ReactViewManager;

import javax.annotation.Nullable;

class MyViewGroup extends ReactViewGroup {

    public MyViewGroup(Context context) {
        super(context);
    }
}

@ReactModule(name = IndexedViewManager.REACT_CLASS)
public class IndexedViewManager extends ReactViewManager {
    protected static final String REACT_CLASS = "RCTIndexedView";

    @Override
    public MyViewGroup createViewInstance(ThemedReactContext context) {
        return new MyViewGroup(context);
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @ReactProp(name = "index")
    public void setIndex(MyViewGroup view, int index) {
        view.setTag(index);
    }
}
